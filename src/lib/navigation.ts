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
