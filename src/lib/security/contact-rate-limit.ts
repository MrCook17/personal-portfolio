import "server-only";

import { createHash } from "node:crypto";

import { getSupabaseServerClient } from "@/lib/supabase/server";

const TEN_MINUTES_MS = 10 * 60 * 1000;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const MAX_TEN_MINUTE_SUBMISSIONS = 3;
const MAX_DAILY_SUBMISSIONS = 10;

type RateLimitResult =
  | {
      allowed: true;
      ipHash: string;
    }
  | {
      allowed: false;
      ipHash: string;
      message: string;
    };

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return realIp?.trim() || "unknown";
}

function hashIp(ip: string) {
  const secret = process.env.CONTACT_RATE_LIMIT_SECRET;

  if (!secret) {
    throw new Error("Missing CONTACT_RATE_LIMIT_SECRET.");
  }

  return createHash("sha256").update(`${ip}:${secret}`).digest("hex");
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

async function countRecentSubmissions(ipHash: string, since: Date) {
  const supabase = getSupabaseServerClient();

  const { data, count, error, status, statusText } = await supabase
    .from("contact_rate_limits")
    .select("id", { count: "exact" })
    .eq("ip_hash", ipHash)
    .gte("created_at", since.toISOString());

  if (error) {
    console.error("Supabase rate-limit count error full:", {
      error,
      status,
      statusText,
    });

    throw new Error(
      `Rate limit count failed: ${
        getSupabaseErrorMessage(error) ||
        statusText ||
        status ||
        "Unknown error"
      }`,
    );
  }

  return count ?? data?.length ?? 0;
}

async function recordRateLimitAttempt(ipHash: string) {
  const supabase = getSupabaseServerClient();

  const { error, status, statusText } = await supabase
    .from("contact_rate_limits")
    .insert({
      ip_hash: ipHash,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Supabase rate-limit insert error full:", {
      error,
      status,
      statusText,
    });

    throw new Error(
      `Rate limit insert failed: ${
        getSupabaseErrorMessage(error) ||
        statusText ||
        status ||
        "Unknown error"
      }`,
    );
  }
}

async function cleanOldRateLimitRows() {
  const supabase = getSupabaseServerClient();

  const { error } = await supabase
    .from("contact_rate_limits")
    .delete()
    .lt("created_at", new Date(Date.now() - 2 * ONE_DAY_MS).toISOString());

  if (error) {
    console.warn("Supabase rate-limit cleanup failed:", {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    });
  }
}

export async function checkContactRateLimit(
  request: Request,
): Promise<RateLimitResult> {
  const ipHash = hashIp(getClientIp(request));

  const now = Date.now();
  const tenMinutesAgo = new Date(now - TEN_MINUTES_MS);
  const oneDayAgo = new Date(now - ONE_DAY_MS);

  const [recentCount, dailyCount] = await Promise.all([
    countRecentSubmissions(ipHash, tenMinutesAgo),
    countRecentSubmissions(ipHash, oneDayAgo),
  ]);

  if (
    recentCount >= MAX_TEN_MINUTE_SUBMISSIONS ||
    dailyCount >= MAX_DAILY_SUBMISSIONS
  ) {
    return {
      allowed: false,
      ipHash,
      message:
        "Too many messages have been sent recently. Please try again later.",
    };
  }

  await recordRateLimitAttempt(ipHash);
  await cleanOldRateLimitRows();

  return {
    allowed: true,
    ipHash,
  };
}
