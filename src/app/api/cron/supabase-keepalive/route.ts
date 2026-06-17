import { NextResponse } from "next/server";

import { getSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const KEEPALIVE_TABLE = "contact_rate_limits";

type KeepAliveBody =
  | {
      ok: true;
      status: "supabase_keepalive_ok";
      table: typeof KEEPALIVE_TABLE;
      rowsRead: number;
      checkedAt: string;
      durationMs: number;
    }
  | {
      ok: false;
      status:
        | "configuration_error"
        | "unauthorized"
        | "supabase_error"
        | "unexpected_error";
      message: string;
    };

type CronAuthResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      status: "configuration_error" | "unauthorized";
      message: string;
    };

function jsonResponse(body: KeepAliveBody, status: number) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function getSupabaseErrorMessage(error: unknown) {
  if (!error || typeof error !== "object") {
    return "Unknown Supabase error";
  }

  const supabaseError = error as {
    message?: unknown;
    details?: unknown;
    hint?: unknown;
    code?: unknown;
  };

  return [
    supabaseError.message,
    supabaseError.details,
    supabaseError.hint,
    supabaseError.code,
  ]
    .filter(Boolean)
    .join(" | ");
}

function isCronRequestAuthorized(request: Request): CronAuthResult {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret) {
    return {
      ok: false,
      status: "configuration_error" as const,
      message: "Missing required environment variable: CRON_SECRET",
    };
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${cronSecret}`) {
    return {
      ok: false,
      status: "unauthorized" as const,
      message: "Missing or invalid cron authorization header.",
    };
  }

  return {
    ok: true,
  };
}

export async function GET(request: Request) {
  const startedAt = Date.now();
  const auth = isCronRequestAuthorized(request);

  if (!auth.ok) {
    const statusCode = auth.status === "configuration_error" ? 500 : 401;

    console.warn("Supabase keep-alive cron authorization failed:", {
      status: auth.status,
    });

    return jsonResponse(
      {
        ok: false,
        status: auth.status,
        message: auth.message,
      },
      statusCode,
    );
  }

  try {
    const supabase = getSupabaseServerClient();

    const { data, error, status, statusText } = await supabase
      .from(KEEPALIVE_TABLE)
      .select("id")
      .limit(1);

    if (error) {
      console.error("Supabase keep-alive query failed:", {
        table: KEEPALIVE_TABLE,
        status,
        statusText,
        message: getSupabaseErrorMessage(error),
      });

      return jsonResponse(
        {
          ok: false,
          status: "supabase_error",
          message: "Supabase keep-alive query failed.",
        },
        502,
      );
    }

    const checkedAt = new Date().toISOString();
    const durationMs = Date.now() - startedAt;
    const rowsRead = data?.length ?? 0;

    console.info("Supabase keep-alive query succeeded:", {
      table: KEEPALIVE_TABLE,
      rowsRead,
      durationMs,
    });

    return jsonResponse(
      {
        ok: true,
        status: "supabase_keepalive_ok",
        table: KEEPALIVE_TABLE,
        rowsRead,
        checkedAt,
        durationMs,
      },
      200,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    const isConfigurationError = message.startsWith(
      "Missing required environment variable:",
    );

    console.error("Supabase keep-alive cron failed:", {
      status: isConfigurationError ? "configuration_error" : "unexpected_error",
      message,
    });

    return jsonResponse(
      {
        ok: false,
        status: isConfigurationError
          ? "configuration_error"
          : "unexpected_error",
        message: isConfigurationError
          ? message
          : "Supabase keep-alive cron failed.",
      },
      500,
    );
  }
}
