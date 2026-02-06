import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, routing } from "./i18n/rounting";

const nextIntlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Handle root path
  if (url.pathname === "/") {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", defaultLocale, {
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Handle default locale explicitly
  if (url.pathname === `/${defaultLocale}`) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", defaultLocale, {
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Otherwise, let next-intl handle locale detection / redirect
  return nextIntlMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_vercel|_next|trpc|favicon.ico).*)",
  ],
};
