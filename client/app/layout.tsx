import { getLocale } from "next-intl/server";
import { Italiana } from "next/font/google";
import "../styles/globals.css";
import { rtlLocales } from "../i18n/rounting";
import { MainLayout } from "@/layouts/MainLayout";
import { cookies } from "next/headers";
import { ITheme } from "@/stores/ui/useThemeStore";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"], // Italiana is only 400
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const rtl = rtlLocales.includes(locale);
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get("theme")?.value || "light";
  const theme: ITheme = cookieTheme === "dark" ? "dark" : "light";

  return (
    <html
      lang={locale}
      className={theme === "dark" ? "dark" : ""}
      dir={rtl ? "rtl" : "ltr"}
    >
      <body className={`${italiana.variable} overflow-hidden antialiased`}>
        <MainLayout theme={theme}>{children}</MainLayout>
      </body>
    </html>
  );
}
