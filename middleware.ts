import { NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    // @ts-expect-error locales are readonly
    const locales: string[] = i18n.locales;
    // Use negotiator and intl-localematcher to get best locale
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales,
    );
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    if (
        [
            "/manifest.json",
            "/favicon.ico",
            "/twitter-image.png",
            "/android-chrome-192x192.png",
            "/android-chrome-512x512.png",
            "/site.webmanifest",
            "/MuutaaHeaderLogo.svg",
            "/opengraph-image.png",
            "/favicon-32x32.png",
            "/favicon-16x16.png",
            "/bybusHeaderLogo.svg",
            "/apple-touch-icon.png",
            "/apple-icon.png",
            "/bybus_logo.png",
            "/bybus_logo_dark.png",
            // Your other files in `public`
        ].includes(pathname)
    )
        return;


    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        );
    }

}


export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|favicon-16x16.png|logo.webp|logo.png|logo_dark.png).*)",
    ],
};
