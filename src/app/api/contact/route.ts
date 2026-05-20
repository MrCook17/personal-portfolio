import { NextResponse } from "next/server";

import { sendContactNotification } from "@/lib/email/send-contact-notification";
import { checkContactRateLimit } from "@/lib/security/contact-rate-limit";
import { isAllowedRequestOrigin } from "@/lib/security/request-origin";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import {
  CONTACT_MIN_SUBMIT_TIME_MS,
  contactServerSchema,
} from "@/lib/validations/contact";

export const runtime = "nodejs";

const SUCCESS_MESSAGE = "Thanks — your message has been sent successfully.";
const ERROR_MESSAGE =
  "Something went wrong. Please try again or contact me directly by email.";

type ApiErrorBody = {
  ok: false;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

type ApiSuccessBody = {
  ok: true;
  message: string;
};

function jsonSuccess(status = 200) {
  return NextResponse.json<ApiSuccessBody>(
    {
      ok: true,
      message: SUCCESS_MESSAGE,
    },
    { status },
  );
}

function jsonError(
  status: number,
  message = ERROR_MESSAGE,
  fieldErrors?: ApiErrorBody["fieldErrors"],
) {
  return NextResponse.json<ApiErrorBody>(
    {
      ok: false,
      message,
      fieldErrors,
    },
    { status },
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function parseJsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type");
  const contentLength = request.headers.get("content-length");

  if (!contentType?.includes("application/json")) {
    return jsonError(415);
  }

  if (contentLength && Number(contentLength) > 10_000) {
    return jsonError(413);
  }

  if (!isAllowedRequestOrigin(request)) {
    return jsonError(403);
  }

  const rawBody = await parseJsonBody(request);

  if (!isRecord(rawBody)) {
    return jsonError(400);
  }

  const honeypotValue =
    typeof rawBody.website === "string" ? rawBody.website.trim() : "";

  if (honeypotValue.length > 0) {
    return jsonSuccess();
  }

  const parsed = contactServerSchema.safeParse(rawBody);

  if (!parsed.success) {
    return jsonError(
      400,
      "Please check the form and try again.",
      parsed.error.flatten().fieldErrors,
    );
  }

  const submissionAge = Date.now() - parsed.data.startedAt;

  if (submissionAge < CONTACT_MIN_SUBMIT_TIME_MS) {
    return jsonSuccess();
  }

  try {
    const rateLimit = await checkContactRateLimit(request);

    if (!rateLimit.allowed) {
      return jsonError(429, rateLimit.message);
    }

    const supabase = getSupabaseServerClient();

    const submittedAt = new Date().toISOString();

    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      source: "portfolio_contact_form",
      status: "new",
    });

    if (error) {
      console.error("Contact submission insert failed:", error.message);
      return jsonError(500);
    }

    const emailResult = await sendContactNotification({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      submittedAt,
    });

    if (!emailResult.ok) {
      console.error("Contact notification failed:", emailResult.error);
    }

    return jsonSuccess(201);
  } catch (error) {
    console.error(
      "Contact route failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return jsonError(500);
  }
}
