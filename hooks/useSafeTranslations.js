"use client";

import { useState, useEffect } from "react";
import { locales, defaultLocale } from "@/i18n";

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
      if (value && typeof value === 'object') {
        // Handle array indices
        if (Array.isArray(value) && !isNaN(k)) {
          value = value[parseInt(k)];
        } else if (k in value) {
          value = value[k];
        } else {
          return key; // Return key if translation not found
        }
      } else {
        return key; // Return key if translation not found
      }
    }
    
    // Return the value if it's a string, number, or boolean, otherwise return the key
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return value;
    }
    return key;
  };

  return t;
}

