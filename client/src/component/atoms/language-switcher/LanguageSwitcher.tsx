"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, defaultLocale } from "../../../../i18n/rounting";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = locales.includes(segments[0])
    ? segments[0]
    : defaultLocale;

  const switchLang = (locale: string) => {
    const newSegments = [...segments];

    // remove existing locale
    if (locales.includes(newSegments[0])) {
      newSegments.shift();
    }

    const isDefault = locale === defaultLocale;

    const newPath = isDefault
      ? `/${newSegments.join("/")}`
      : `/${locale}/${newSegments.join("/")}`;

    router.push(newPath || "/");
    router.refresh(); // force server components to refetch
  };

  return (
    <div className="flex gap-4">
      {locales
        .filter((locale) => locale !== currentLocale)
        .map((locale) => (
          <button
            key={locale}
            onClick={() => switchLang(locale)}
            className="px-2 py-1 rounded font-medium underline"
          >
            {locale.toUpperCase()}
          </button>
        ))}
    </div>
  );
};
