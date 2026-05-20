import "server-only";

import { Resend } from "resend";

type ContactNotificationInput = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

type EmailResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: string;
    };

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function sendContactNotification(
  submission: ContactNotificationInput,
): Promise<EmailResult> {
  const resend = getResendClient();
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resend || !to || !from) {
    return {
      ok: false,
      error: "Email notification environment variables are missing.",
    };
  }

  const emailText = [
    "New portfolio contact form submission",
    "",
    "Name:",
    submission.name,
    "",
    "Email:",
    submission.email,
    "",
    "Message:",
    submission.message,
    "",
    "Submitted:",
    submission.submittedAt,
    "",
    "Source:",
    "portfolio_contact_form",
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: submission.email,
    subject: "New portfolio contact form submission",
    text: emailText,
  });

  if (error) {
    return {
      ok: false,
      error: error.message,
    };
  }

  return {
    ok: true,
  };
}
