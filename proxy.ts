import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'es']
const defaultLocale = 'es';

function getLocale(request: NextRequest) { 
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // 2. Usar Negotiator para obtener los idiomas preferidos del usuario
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // 3. Matcher compara lo que el usuario quiere vs lo que tú ofreces
  return match(languages, locales, defaultLocale);

}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Si no hay idioma en la url
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // Reirect
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
}