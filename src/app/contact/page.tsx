import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactLinks } from "@/components/contact/contact-links";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contact | Charlie Cook",
  description:
    "Contact Charlie Cook for junior software developer, backend, full-stack, web developer and graduate software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24" size="lg">
      <PageHeader
        eyebrow="Contact"
        title="Contact Me"
        description="Open to junior software developer, backend developer, full-stack developer, web developer and graduate software roles in the UK."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactLinks />
        <ContactForm />
      </div>
    </Container>
  );
}
