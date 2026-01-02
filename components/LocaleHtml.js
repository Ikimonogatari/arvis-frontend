"use client";

import { useEffect, useState } from "react";
import { locales, defaultLocale } from "@/i18n";

export default function LocaleHtml() {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    if (typeof document !== "undefined") {
      // Get locale from cookie
      const getCookieLocale = () => {
        const cookies = document.cookie.split(';');
        const localeCookie = cookies.find(c => c.trim().startsWith('NEXT_LOCALE='));
        if (localeCookie) {
          const localeValue = localeCookie.split('=')[1]?.trim();
          if (localeValue && locales.includes(localeValue)) {
            return localeValue;
          }
        }
        return defaultLocale;
      };

      const detectedLocale = getCookieLocale();
      setLocale(detectedLocale);
      document.documentElement.lang = detectedLocale;

      // Listen for locale changes
      const handleLocaleChange = (event) => {
        const newLocale = event.detail.locale;
        setLocale(newLocale);
        document.documentElement.lang = newLocale;
      };

      window.addEventListener('localechange', handleLocaleChange);

      return () => {
        window.removeEventListener('localechange', handleLocaleChange);
      };
    }
  }, []);

  return null;
}

