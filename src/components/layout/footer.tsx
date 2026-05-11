import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}.
        </p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.</p>
      </div>
    </footer>
  );
}
