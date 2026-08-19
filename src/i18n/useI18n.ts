import { useContext } from "react";
import { I18nContext } from "./I18nProvider";
import type { I18nContextValue } from "./types";

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);

  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider.");
  }

  return context;
}
