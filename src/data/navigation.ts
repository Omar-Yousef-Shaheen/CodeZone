import type { NavigationTranslationKey } from "../i18n/types";

export type NavigationItemId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "services"
  | "process"
  | "contact";

export type NavigationItem = {
  readonly id: NavigationItemId;
  readonly href: `#${NavigationItemId}`;
  readonly labelKey: NavigationTranslationKey;
};

export const navigationItems = [
  { id: "home", href: "#home", labelKey: "home" },
  { id: "about", href: "#about", labelKey: "about" },
  { id: "experience", href: "#experience", labelKey: "experience" },
  { id: "projects", href: "#projects", labelKey: "projects" },
  { id: "services", href: "#services", labelKey: "services" },
  { id: "process", href: "#process", labelKey: "process" },
  { id: "contact", href: "#contact", labelKey: "contact" },
] as const satisfies readonly NavigationItem[];
