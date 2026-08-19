import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_DIRECTIONS,
  LOCALE_STORAGE_KEY,
  isLocale,
} from "./config";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
import type { Dictionary, I18nContextValue, Locale } from "./types";

const dictionaries: Readonly<Record<Locale, Dictionary>> = {
  en,
  ar,
};

export const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

export function I18nProvider({ children }: { readonly children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const direction = LOCALE_DIRECTIONS[locale];
  const dictionary = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // Locale state still updates when storage is unavailable.
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, direction, dictionary, setLocale }),
    [dictionary, direction, locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
