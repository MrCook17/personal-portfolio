import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactLinks } from "@/components/contact/contact-links";
import { PageContent } from "@/components/ui/page-layout";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contact | Charlie Cook",
  description:
    "Contact Charlie Cook for junior software developer, backend, full-stack, web developer and graduate software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Me"
        description="Open to junior software developer, backend developer, full-stack developer, web developer and graduate software roles in the UK."
      />

      <PageContent size="lg">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactLinks />
          <ContactForm />
        </div>
      </PageContent>
    </>
  );
}
