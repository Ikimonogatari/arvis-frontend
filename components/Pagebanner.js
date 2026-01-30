"use client";

import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import Link from "next/link";

/**
 * @param {string} pageName - Main heading (h1) and fallback last breadcrumb
 * @param {{ label: string, href?: string }[]} [breadcrumbs] - Optional. e.g. [{ label: "Home", href: "/" }, { label: "Blog", href: "/blogs-grid" }, { label: "Article Title" }]
 */
const Pagebanner = ({ pageName, breadcrumbs }) => {
  const t = useSafeTranslations("header");
  const tBreadcrumb = useSafeTranslations("breadcrumb");

  const translatedPageName = tBreadcrumb(pageName) || pageName;

  const items =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? breadcrumbs
      : [{ label: t("home"), href: "/" }, { label: translatedPageName }];

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
              {items.map((item, index) => (
                <li key={index}>
                  {index > 0 && <i className="far fa-angle-double-right" />}
                  {item.href ? (
                    <Link href={item.href}>
                      {item.label === "Home"
                        ? t("home")
                        : tBreadcrumb(item.label) || item.label}
                    </Link>
                  ) : (
                    <span>{tBreadcrumb(item.label) || item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagebanner;
