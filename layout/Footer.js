"use client";

import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer, cta }) => {
  return <Footer4 cta={cta} />;
};
export default Footer;

const Footer4 = ({ cta }) => {
  const t = useSafeTranslations("footer");
  return (
    <Fragment>
      {cta && (
        <section className="cta-wrapper cta-2 style-3 section-padding pb-0 section-bg">
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
      )}
      <footer className="footer-wrapper section-padding pb-0">
        <FooterContent logo="assets/img/arvis-logo.png" layout="style-3" footerBottomClass="section-bg-2" />
      </footer>
    </Fragment>
  );
};

const FooterContent = ({
  logo = "assets/img/arvis-logo.png",
  layout = "style-2",
  footerBottomClass = "style-2",
}) => {
  const t = useSafeTranslations("footer");
  
  const services = [
    t("services.dataCenter"),
    t("services.ups"),
    t("services.cooling"),
    t("services.network"),
    t("services.cabling"),
    t("services.cctv"),
    t("services.security"),
  ];

  const contacts = [
    {
      icon: "flaticon-email",
      title: t("mailUs"),
      info: "info@arvisys.com",
      href: "mailto:info@arvisys.com",
    },
    {
      icon: "fal fa-map-marker-alt",
      title: t("address"),
      info: t("addressText"),
      href: "#",
    },
    {
      icon: "fal fa-phone-alt",
      title: t("phone"),
      info: "+976-75750077",
      href: "tel:+97675750077",
    },
  ];

  const galleryImgs = [
    { src: "assets/img/gallery/01.jpg" },
    { src: "assets/img/gallery/02.jpg" },
    { src: "assets/img/gallery/03.jpg" },
    { src: "assets/img/gallery/04.jpg" },
    { src: "assets/img/gallery/05.jpg" },
    { src: "assets/img/gallery/06.jpg" },
    { src: "assets/img/gallery/07.jpg" },
    { src: "assets/img/gallery/08.jpg" },
    { src: "assets/img/gallery/09.jpg" },
  ];

  return (
    <Fragment>
      <div className="container">
        <div className={`footer-widgets-1 section-padding ${layout}`}>
          <div className="row g-5">
            <div
              className="col-xl-3 col-lg-6 pe-xxl-0 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src={logo} alt="logo-img" height={28} width={118} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    {t("description")}
                  </p>
                  <h5>{t("subscribeNow")}</h5>
                  <div className="footer-input border-radius-none">
                    <input type="email" id="email2" placeholder={t("yourEmail")} />
                    <button
                      className="newsletter-btn border-radius-none"
                      type="submit"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/Arvis.Systems" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://x.com/ArvisSystems" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-5 ps-xxl-3">
                <div className="widget-head">
                  <h4>{t("ourServices")}</h4>
                </div>
                <ul className="list-area">
                  {services.map((service) => (
                    <li key={service}>
                      <Link href="/contact">
                        <i className="fas fa-circle" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>{t("contactUsTitle")}</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    {contacts.map((contact, index) => (
                      <div key={index} className="contact">
                        <a href={contact.href}>
                          <i className={contact.icon}></i>
                        </a>
                        <div className="contact-infu">
                          <span>{contact.title}</span>
                          <h5>{contact.info}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-5">
                <div className="widget-head">
                  <h4>{t("gallery")}</h4>
                </div>
                <div className="gallery">
                  {galleryImgs.map((img, index) => (
                    <div key={index} className="footer-gallery-img">
                      <img src={img.src} alt />
                      <div className="content">
                        <a href={img.src} className="img-popup">
                          <i className="fal fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`footer-bottom ${footerBottomClass}`}>
        <div className="container">
          <div className={`footer-bottom-wrapper ${footerBottomClass === "section-bg-2" ? "" : "d-flex align-items-center justify-content-between"}`}>
            <p className={footerBottomClass === "section-bg-2" ? "text-center" : ""}>{t("copyright")}</p>
            {footerBottomClass !== "section-bg-2" && (
              <div className="security ">
                <Link href="/contact">{t("privacyPolicy")}</Link>/
                <Link href="/contact">{t("termsCondition")} </Link>/
                <Link href="/about"> {t("aboutUs")}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
