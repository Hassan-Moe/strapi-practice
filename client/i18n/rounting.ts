import { defineRouting } from "next-intl/routing";

export const rtlLocales = ["ar", "he", "fa", "ur"];
export const defaultLocale = "en";
export const locales = ["en", "ar"];

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});
