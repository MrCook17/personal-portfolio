export type NavigationItem = {
  label: string;
  href: string;
};

export function isActiveNavigationPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function normalizeNavigationPath(path: string) {
  const pathname = path.split(/[?#]/, 1)[0] || "/";

  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function isSameNavigationPath(pathname: string, href: string) {
  return normalizeNavigationPath(pathname) === normalizeNavigationPath(href);
}
