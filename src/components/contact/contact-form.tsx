"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  contactClientSchema,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/validations/contact";

type ContactApiResponse =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
      fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
    };

const inputClasses =
  "min-h-11 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/60 disabled:cursor-not-allowed disabled:opacity-60";

const labelClasses = "text-sm font-medium text-foreground";

const errorClasses = "mt-2 text-sm text-destructive";

export function ContactForm() {
  const [timestampVersion, setTimestampVersion] = useState(0);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactClientSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
      startedAt: 0,
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("startedAt", Date.now(), {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: false,
    });
  }, [setValue, timestampVersion]);

  async function onSubmit(values: ContactFormValues) {
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.ok) {
        if (!result.ok && result.fieldErrors) {
          for (const [field, messages] of Object.entries(result.fieldErrors)) {
            const firstMessage = messages?.[0];

            if (firstMessage) {
              setError(field as keyof ContactFormInput, {
                type: "server",
                message: firstMessage,
              });
            }
          }
        }

        setFormStatus({
          type: "error",
          message:
            !result.ok && result.message
              ? result.message
              : "Something went wrong. Please try again or contact me directly by email.",
        });

        return;
      }

      setFormStatus({
        type: "success",
        message: result.message,
      });

      reset({
        name: "",
        email: "",
        message: "",
        website: "",
        startedAt: 0,
      });

      setTimestampVersion((currentValue) => currentValue + 1);
    } catch {
      setFormStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
    }
  }

  const nameErrorId = errors.name ? "contact-name-error" : undefined;
  const emailErrorId = errors.email ? "contact-email-error" : undefined;
  const messageErrorId = errors.message ? "contact-message-error" : undefined;
  const privacyNoticeId = "contact-privacy-notice";

  return (
    <Card>
      <CardHeader>
        <CardTitle as="h2">Send a message</CardTitle>
        <CardDescription>
          Use the form below for role opportunities, portfolio questions or
          relevant software/web development enquiries.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          aria-describedby={privacyNoticeId}
          noValidate
        >
          <div
            className="absolute -left-2499.75 h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          <input type="hidden" {...register("startedAt")} />

          <div>
            <label className={labelClasses} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={nameErrorId}
              className={`${inputClasses} mt-2`}
              {...register("name")}
            />
            {errors.name?.message ? (
              <p id="contact-name-error" className={errorClasses}>
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClasses} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={emailErrorId}
              className={`${inputClasses} mt-2`}
              {...register("email")}
            />
            {errors.email?.message ? (
              <p id="contact-email-error" className={errorClasses}>
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={labelClasses} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={7}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={messageErrorId}
              className={`${inputClasses} mt-2 resize-y`}
              {...register("message")}
            />
            {errors.message?.message ? (
              <p id="contact-message-error" className={errorClasses}>
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <p
            id={privacyNoticeId}
            className="text-sm leading-6 text-muted-foreground"
          >
            I’ll use the details you provide to respond to your message. Your
            name, email address and message may be stored securely and sent to
            my email inbox as a notification. I do not use contact form
            submissions for marketing.{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Read the privacy page
            </Link>
            .
          </p>

          {formStatus ? (
            <div
              role="status"
              aria-live="polite"
              className={`rounded-xl border px-4 py-3 text-sm ${
                formStatus.type === "success"
                  ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200"
                  : "border-destructive/40 bg-destructive/10 text-destructive"
              }`}
            >
              {formStatus.message}
            </div>
          ) : null}

          <Button
            className="w-full sm:w-auto"
            type="submit"
            disabled={isSubmitting}
          >
            <Send className="mr-2 size-4" aria-hidden="true" />
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
