"use client";

import Link from "next/link";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const CTA = ({
  wrapperClass = "cta-wrapper cta-2 style-3 section-padding pb-0 section-bg",
}) => {
  const t = useSafeTranslations("footer");
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
          <div className="icon">
            <i className="flaticon-customer-support" />
          </div>
          <div className="title">
            <h3 className="split-text right">
              {t("cta.title")}
            </h3>
            <p>{t("cta.description")}</p>
          </div>
          <Link href="/contact" className="theme-btn white-btn">
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTA;
