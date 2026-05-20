import "server-only";

function normaliseOrigin(value: string) {
  return value.replace(/\/$/, "");
}

function getAllowedOrigins() {
  const origins = new Set<string>();

  origins.add("http://localhost:3000");
  origins.add("http://127.0.0.1:3000");

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    origins.add(normaliseOrigin(process.env.NEXT_PUBLIC_SITE_URL));
  }

  if (process.env.VERCEL_URL) {
    origins.add(`https://${process.env.VERCEL_URL}`);
  }

  return origins;
}

export function isAllowedRequestOrigin(request: Request) {
  const originHeader = request.headers.get("origin");

  if (!originHeader) {
    return false;
  }

  try {
    const origin = new URL(originHeader).origin;
    return getAllowedOrigins().has(normaliseOrigin(origin));
  } catch {
    return false;
  }
}
