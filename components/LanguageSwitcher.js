"use client";

import { useRouter } from "next/navigation";
import { locales, defaultLocale } from "@/i18n";
import { useState, useEffect, useRef } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

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

  const getLocaleLabel = (loc) => {
    return loc === "en" ? "EN" : loc === "mn" ? "MN" : loc.toUpperCase();
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="language-switcher d-flex align-items-center"
      style={{ position: "relative" }}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="language-dropdown"
        style={{
          position: "relative",
          cursor: "pointer"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            backgroundColor: "rgba(63, 181, 253, 0.1)",
            borderRadius: "6px",
            border: "1px solid rgba(11, 110, 218, 0.2)",
            fontSize: "13px",
            fontWeight: "500",
            color: "#0b6eda",
            transition: "all 0.3s ease",
            minWidth: "60px"
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{getLocaleLabel(locale)}</span>
          <i 
            className="fas fa-chevron-down"
            style={{
              fontSize: "10px",
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
            }}
          />
        </div>
        
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderRadius: "6px",
              border: "1px solid rgba(11, 110, 218, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              overflow: "hidden",
              minWidth: "100%",
              marginTop: "2px"
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {locales.map((loc) => (
              <div
                key={loc}
                onClick={() => {
                  switchLocale(loc);
                  setIsOpen(false);
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                }}
                style={{
                  padding: "10px 12px",
                  fontSize: "13px",
                  fontWeight: locale === loc ? "600" : "400",
                  color: locale === loc ? "#0b6eda" : "#4a5568",
                  backgroundColor: locale === loc 
                    ? "rgba(63, 181, 253, 0.1)" 
                    : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderLeft: locale === loc 
                    ? "3px solid #0b6eda" 
                    : "3px solid transparent"
                }}
                onMouseEnter={(e) => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                  if (locale !== loc) {
                    e.target.style.backgroundColor = "rgba(63, 181, 253, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (locale !== loc) {
                    e.target.style.backgroundColor = "transparent";
                  }
                }}
              >
                {getLocaleLabel(loc)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

