import { defineRouting } from "next-intl/routing";

export const rtlLocales = ["ar", "he", "fa", "ur"];

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
