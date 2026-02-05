import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/rounting";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // If the URL is exactly "/en", skip normalization
  if (url.pathname === `/${routing.defaultLocale}`) {
    return NextResponse.next();
  }

  // Otherwise, let next-intl handle locale detection / redirect
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_vercel|_next|trpc|favicon.ico).*)",
  ],
};
