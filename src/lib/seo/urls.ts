import { siteConfig } from "@/content/site";

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) {
    return path;
  }

  if (path === "" || path === "/") {
    return siteConfig.url;
  }

  const normalisedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.url}${normalisedPath}`;
}
