import { z } from "zod";

export const CONTACT_NAME_MIN_LENGTH = 2;
export const CONTACT_NAME_MAX_LENGTH = 80;
export const CONTACT_MESSAGE_MIN_LENGTH = 10;
export const CONTACT_MESSAGE_MAX_LENGTH = 2000;
export const CONTACT_MIN_SUBMIT_TIME_MS = 3000;
export const CONTACT_MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

const urlPattern =
  /(https?:\/\/|www\.|[\w-]+\.(?:com|co\.uk|net|org|io|dev|xyz|info|biz|ru|cn)\b)/i;

const scriptPattern = /(<\/?[a-z][\s\S]*>|javascript:|on\w+\s*=)/i;

const repeatedCharsPattern = /(.)\1{30,}/;

function countLinks(value: string) {
  return (value.match(/https?:\/\/|www\./gi) ?? []).length;
}

export const contactVisibleSchema = z.object({
  name: z
    .string()
    .trim()
    .min(CONTACT_NAME_MIN_LENGTH, "Name is required.")
    .max(
      CONTACT_NAME_MAX_LENGTH,
      `Name must be ${CONTACT_NAME_MAX_LENGTH} characters or fewer.`,
    )
    .refine((value) => !urlPattern.test(value), {
      message: "Name cannot contain links.",
    })
    .refine((value) => !scriptPattern.test(value), {
      message: "Name contains unsupported characters.",
    }),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer.")
    .transform((value) => value.toLowerCase()),

  message: z
    .string()
    .trim()
    .min(
      CONTACT_MESSAGE_MIN_LENGTH,
      `Message must be at least ${CONTACT_MESSAGE_MIN_LENGTH} characters.`,
    )
    .max(
      CONTACT_MESSAGE_MAX_LENGTH,
      `Message must be ${CONTACT_MESSAGE_MAX_LENGTH} characters or fewer.`,
    )
    .refine((value) => !scriptPattern.test(value), {
      message: "Message contains unsupported content.",
    })
    .refine((value) => !repeatedCharsPattern.test(value), {
      message: "Message contains too many repeated characters.",
    })
    .refine((value) => countLinks(value) <= 2, {
      message: "Message cannot contain more than two links.",
    }),
});

export const contactClientSchema = contactVisibleSchema.extend({
  website: z.string().max(200).optional().default(""),
  startedAt: z.coerce
    .number()
    .int()
    .positive("Invalid form timestamp.")
    .refine((value) => Date.now() - value < CONTACT_MAX_FORM_AGE_MS, {
      message: "Please refresh the page and try again.",
    }),
});

export const contactServerSchema = contactClientSchema;

export type ContactFormInput = z.input<typeof contactClientSchema>;
export type ContactFormValues = z.output<typeof contactClientSchema>;
export type ContactSubmission = z.infer<typeof contactServerSchema>;
