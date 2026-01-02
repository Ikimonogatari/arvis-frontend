"use client";
import Contact from "@/components/Contact";
import Pagebanner from "@/components/Pagebanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import ZotechLayout from "@/layout/ZotechLayout";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const page = () => {
  const t = useSafeTranslations("faq");
  
  return (
    <ZotechLayout>
      <Pagebanner pageName="FAQ's Page" />
      {/* FAQ Section Start */}
      <section className="faq-wrapper faq-1 style-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>{t("subtitle")}</span>
            </div>
            <h2>
              {t("title")}
            </h2>
          </div>
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="faq-content">
                <div className="faq-accordion mt-4 mt-md-0">
                  <FAQAccordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <Contact />
    </ZotechLayout>
  );
};
export default page;
