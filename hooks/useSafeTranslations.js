"use client";

import { defaultLocale, locales } from "@/i18n";
import { useEffect, useState } from "react";

// Pre-import translations to avoid dynamic import issues
import enMessages from "@/messages/en.json";
import mnMessages from "@/messages/mn.json";

const translationMap = {
  en: enMessages,
  mn: mnMessages,
};

export function useSafeTranslations(namespace) {
  const [translations, setTranslations] = useState(null);
  const [locale, setLocale] = useState(defaultLocale);

  // Get locale from cookie helper
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

  // Load translations based on locale
  const loadTranslations = (currentLocale) => {
    const messages = translationMap[currentLocale] || translationMap[defaultLocale];
    setTranslations(messages);
  };

  useEffect(() => {
    // Initial load
    const detectedLocale = getCookieLocale();
    setLocale(detectedLocale);
    loadTranslations(detectedLocale);

    // Listen for locale changes
    const handleLocaleChange = (event) => {
      const newLocale = event.detail.locale;
      setLocale(newLocale);
      loadTranslations(newLocale);
    };

    window.addEventListener('localechange', handleLocaleChange);

    return () => {
      window.removeEventListener('localechange', handleLocaleChange);
    };
  }, []);

  // Return translation function
  const t = (key) => {
    if (!translations) return key;
  
    const keys = key.split('.');
    let value = namespace ? translations[namespace] : translations;
  
    for (const k of keys) {
      if (value && typeof value === "object") {
        if (Array.isArray(value) && !isNaN(k)) {
          value = value[parseInt(k)];
        } else if (k in value) {
          value = value[k];
        } else {
          return key;
        }
      } else {
        return key;
      }
    }
  
    return value; // ✅ allow arrays, objects, strings
  };
  

  return t;
}

export function useSafeLocale() {
  const [locale, setLocale] = useState(defaultLocale);

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

  useEffect(() => {
    setLocale(getCookieLocale());

    const handleLocaleChange = (event) => {
      setLocale(event.detail.locale);
    };

    window.addEventListener('localechange', handleLocaleChange);
    return () => {
      window.removeEventListener('localechange', handleLocaleChange);
    };
  }, []);

  return locale;
}

