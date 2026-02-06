import { getLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { rtlLocales } from "../i18n/rounting";
import { MainLayout } from "@/layouts/MainLayout";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale(); // get locale without params
  const rtl = rtlLocales.includes(locale);

  return (
    <html lang={locale} dir={rtl ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
