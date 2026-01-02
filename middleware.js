import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request) {
  // Don't modify API routes or static files
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Get locale from cookie, header, or use default
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const headerLocale = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
  
  let locale = cookieLocale || headerLocale || defaultLocale;
  
  // Validate locale
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  // Set locale in cookie if not present
  const response = NextResponse.next();
  if (!cookieLocale) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

