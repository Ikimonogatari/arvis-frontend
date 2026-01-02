"use client";
import { useState, useMemo, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { locales, defaultLocale } from "@/i18n";
import enMessages from "@/messages/en.json";
import mnMessages from "@/messages/mn.json";

const translationMap = {
  en: enMessages,
  mn: mnMessages,
};

export const FAQAccordion = () => {
  const [locale, setLocale] = useState(defaultLocale);
  const [faqData, setFaqData] = useState(null);
  const [toggle, setToggle] = useState(null);

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

    const detectedLocale = getCookieLocale();
    setLocale(detectedLocale);
    const messages = translationMap[detectedLocale] || translationMap[defaultLocale];
    setFaqData(messages?.faq);

    const handleLocaleChange = (event) => {
      const newLocale = event.detail.locale;
      setLocale(newLocale);
      const newMessages = translationMap[newLocale] || translationMap[defaultLocale];
      setFaqData(newMessages?.faq);
    };

    window.addEventListener('localechange', handleLocaleChange);
    return () => {
      window.removeEventListener('localechange', handleLocaleChange);
    };
  }, []);

  // Get all categories
  const categories = [
    "dataCenter",
    "ups",
    "cooling",
    "network",
    "cabling",
    "cctv",
    "security",
  ];

  // Group FAQs by category
  const groupedFAQs = useMemo(() => {
    if (!faqData || !faqData.categories) return [];
    
    return categories.map((categoryKey, catIndex) => {
      const category = faqData.categories[categoryKey];
      if (!category || !category.questions) return null;
      
      return {
        categoryKey,
        title: category.title || categoryKey,
        questions: category.questions.map((faq, index) => ({
          id: `${categoryKey}-${index}`,
          question: faq.q,
          answer: faq.a,
          delay: `${(index * 0.1).toFixed(1)}s`,
        })),
        delay: `${(catIndex * 0.1).toFixed(1)}s`,
      };
    }).filter(Boolean);
  }, [faqData, categories]);

  return (
    <Accordion className="accordion" id="accordion" defaultActiveKey={toggle}>
      {groupedFAQs.map(({ categoryKey, title, questions, delay }) => (
        <div key={categoryKey} className="faq-section-wrapper">
          <div
            className="faq-section-header mb-4 mt-5 wow fadeInUp"
            data-wow-delay={delay}
            style={{
              marginTop: categoryKey === "dataCenter" ? "0" : "40px"
            }}
          >
            <h3 className="faq-section-title" style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
              paddingBottom: "15px",
              borderBottom: "2px solid #e0e0e0",
              color: "#000"
            }}>
              {title}
            </h3>
          </div>
          {questions.map(({ id, question, answer, delay: qDelay }) => (
            <div
              key={id}
              className={`accordion-item wow fadeInUp`}
              data-wow-delay={qDelay}
            >
              <h4 className="accordion-header">
                <Accordion.Toggle
                  as={"button"}
                  className={`accordion-button ${toggle === id ? "" : "collapsed"}`}
                  eventKey={id}
                  aria-expanded={toggle === id ? "true" : "false"}
                  onClick={() => setToggle(toggle === id ? null : id)}
                >
                  {question}
                </Accordion.Toggle>
              </h4>
              <Accordion.Collapse eventKey={id} className="accordion-collapse">
                <div className="accordion-body">{answer}</div>
              </Accordion.Collapse>
            </div>
          ))}
        </div>
      ))}
    </Accordion>
  );
};

