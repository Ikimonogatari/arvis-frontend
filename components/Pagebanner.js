"use client";

import Link from "next/link";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const Pagebanner = ({ pageName }) => {
  const t = useSafeTranslations("header");
  const tBreadcrumb = useSafeTranslations("breadcrumb");
  
  // Get translated page name if it exists, otherwise use the provided pageName
  const translatedPageName = tBreadcrumb(pageName) || pageName;
  
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: 'url("assets/img/breadcrumb.jpg")' }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {translatedPageName}
            </h1>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                <i className="far fa-angle-double-right" />
              </li>
              <li>{translatedPageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagebanner;
