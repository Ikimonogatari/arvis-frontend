"use client";

import { useRouter } from "next/navigation";
import { locales, defaultLocale } from "@/i18n";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    // Get locale from cookie
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

    setLocale(getCookieLocale());

    // Listen for locale changes (in case it changes from elsewhere)
    const handleLocaleChange = (event) => {
      setLocale(event.detail.locale);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('localechange', handleLocaleChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('localechange', handleLocaleChange);
      }
    };
  }, []);

  const switchLocale = async (newLocale) => {
    if (newLocale === locale) return;
    
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setLocale(newLocale);
    
    // Dispatch custom event to notify all components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('localechange', { detail: { locale: newLocale } }));
    }
  };

  return (
    <div className="language-switcher d-flex align-items-center">
      <div 
        className="language-toggle"
        style={{
          display: "flex",
          gap: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          padding: "4px",
          borderRadius: "6px",
          border: "1px solid rgba(0, 0, 0, 0.1)"
        }}
      >
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`language-btn ${locale === loc ? "active" : ""}`}
            style={{
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: locale === loc ? "#000" : "transparent",
              color: locale === loc ? "#fff" : "#000",
              fontSize: "14px",
              fontWeight: locale === loc ? "600" : "400",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              minWidth: "40px"
            }}
            onMouseEnter={(e) => {
              if (locale !== loc) {
                e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (locale !== loc) {
                e.target.style.backgroundColor = "transparent";
              }
            }}
          >
            {loc === "en" ? "EN" : loc === "mn" ? "MN" : loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

