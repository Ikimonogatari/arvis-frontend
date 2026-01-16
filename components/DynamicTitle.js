"use client";

import { useEffect } from "react";
import { defaultLocale, locales } from "@/i18n";

export default function DynamicTitle() {
  useEffect(() => {
    const getCookieLocale = () => {
      if (typeof document === 'undefined') return defaultLocale;
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

    const updateTitle = () => {
      const locale = getCookieLocale();
      const titles = {
        en: "Arvis Systems LLC",
        mn: "Арвис Системс ХХК"
      };
      document.title = titles[locale] || titles[defaultLocale];
    };

    // Initial update
    updateTitle();

    // Listen for locale changes
    const handleLocaleChange = () => {
      updateTitle();
    };

    window.addEventListener('localechange', handleLocaleChange);

    return () => {
      window.removeEventListener('localechange', handleLocaleChange);
    };
  }, []);

  return null;
}
