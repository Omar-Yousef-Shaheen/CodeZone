import type { Direction, Locale } from "./types";

export const DEFAULT_LOCALE: Locale = "en";

export const SUPPORTED_LOCALES = ["en", "ar"] as const satisfies readonly Locale[];

export const LOCALE_STORAGE_KEY = "czpixel.locale";

export const LOCALE_DIRECTIONS: Readonly<Record<Locale, Direction>> = {
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ar";
}
