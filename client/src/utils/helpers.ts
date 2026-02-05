import { rtlLocales } from "../../i18n/rounting";

export function isRTL(locale: string) {
  return rtlLocales.includes(locale);
}
