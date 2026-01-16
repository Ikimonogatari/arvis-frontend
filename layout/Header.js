"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  useSafeLocale,
  useSafeTranslations,
} from "@/hooks/useSafeTranslations";
import { zotechUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  const locale = useSafeLocale();
  useEffect(() => {
    zotechUtility.serarchpopup();
  }, []);

  const HeaderComponent =
    [Header1, Header2, Header3, Header4][header - 1] || Header1;
  return (
    <div className={locale === "mn" ? "language-mn" : ""}>
      <HeaderComponent />
      <MobileMenu />
    </div>
  );
};
export default Header;

const Header1 = () => {
  const t = useSafeTranslations("header");
  const tFooter = useSafeTranslations("footer");
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            {/* <ul>
              <li>
                <i className="fal fa-phone-alt" />
                <a href>+976-75750077</a>
              </li>
              <li>
                <i className="fal fa-map-marker-alt" />
                <a href>{tFooter("addressText")}</a>
              </li>
              <li>
                <i className="far fa-clock" />
                <a href>8.00am - 10.00pm</a>
              </li>
            </ul> */}
            {/* /.topbar__info */}
            {/* <div className="social">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-dribbble" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div> */}
          </div>
          {/* /.topbar__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* Header Section Start */}
      <header>
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main ">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      {/* <img
                        src="assets/img/logo/black-logo.png"
                        alt="logo-img"
                      /> */}
                      <img
                        src="assets/img/arvis-logo.png"
                        alt="logo-img"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </div>
                </div>
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <Menu />
                </div>
                <div className="header-right">
                  <div className="language-switcher-wrapper me-3">
                    <LanguageSwitcher />
                  </div>
                  <div className="header-button  d-none d-sm-block">
                    <Link href="/quote" className="theme-btn black-btn">
                      {t("requestQuote")}
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header2 = () => {
  const t = useSafeTranslations("header");
  return (
    <header>
      <div id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main ">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/white-logo.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                </div>
                <div className="language-switcher-wrapper me-3">
                  <LanguageSwitcher />
                </div>
                <div className="header-button  d-none d-sm-block">
                  <div className="contact-us ">
                    <a href className="icon">
                      <i className="far fa-phone-alt" />
                    </a>
                    <div className="title">
                      <p>{t("phone")}</p>
                      <span>+976-75750077</span>
                    </div>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header3 = () => {
  const t = useSafeTranslations("header");
  const tFooter = useSafeTranslations("footer");
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar style-2">
        <div className="container-fluid">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            <p>{t("topbarText")}</p>
            <div className="topbar-right d-flex align-items-center">
              <ul>
                <li>
                  <i className="fal fa-phone-alt" />
                  <a href>+976-75750077</a>
                </li>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  <a href>{tFooter("addressText")}</a>
                </li>
                <li>
                  <i className="far fa-clock" />
                  <a href>8.00am - 10.00pm</a>
                </li>
              </ul>
              {/* /.topbar__info */}
              <div className="social">
                <a
                  href="https://www.facebook.com/Arvis.Systems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://x.com/ArvisSystems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          {/* /.topbar__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* Header Section Start */}
      <header>
        <div id="header-sticky" className="header-2 style-3">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main ">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="assets/img/logo/white-logo-2.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <Menu />
                  </div>
                </div>
                <div className="header-right">
                  <div className="language-switcher-wrapper me-3">
                    <LanguageSwitcher />
                  </div>
                  <div className="header-button d-none d-md-block">
                    <a href className="theme-btn black-btn">
                      {t("getInTouch")}
                    </a>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header4 = () => {
  const t = useSafeTranslations("header");
  return (
    <header>
      <div id="header-sticky" className="header-2 style-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main ">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img
                      src="assets/img/logo/white-logo-2.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="contact-us d-flex align-items-center">
                  <a href className="icon">
                    <i className="far fa-phone-alt" />
                  </a>
                  <div className="title">
                    <p>{t("phone")}</p>
                    <span>+976-75750077</span>
                  </div>
                </div>
                <div className="language-switcher-wrapper me-3">
                  <LanguageSwitcher />
                </div>
                <div className="header-button d-none d-sm-block">
                  <a href className="theme-btn black-btn theme-btn-2">
                    {t("getInTouch")}
                  </a>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Menu = () => {
  const t = useSafeTranslations("header");
  return (
    <div className="main-menu">
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="active">
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("aboutUs")}</Link>
          </li>
          <li>
            <Link href="/services">{t("solutionsServices")}</Link>
          </li>
          <li>
            <Link href="/products">{t("products")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("projects")}</Link>
          </li>
          <li>
            <Link href="/eshop">{t("eshop")}</Link>
          </li>
          <li>
            <a href="#">
              {t("newsResources")}
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/blogs-grid">{t("menu.blogGrid")}</Link>
              </li>
              <li>
                <Link href="/blog-news">{t("menu.blogNews")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MobileMenu = () => {
  const t = useSafeTranslations("header");
  const tFooter = useSafeTranslations("footer");
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img
                      src="assets/img/arvis-logo.png"
                      alt="logo-img"
                      height={28}
                      width={118}
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a href="#nav" className="meanmenu-reveal">
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul>
                      <li>
                        <Link href="/">{t("home")}</Link>
                      </li>
                      <li>
                        <Link href="/about">{t("aboutUs")}</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => activeMenuSet("SolutionsServices")}
                        >
                          {t("solutionsServices")}
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul
                          className="submenu"
                          style={activeLi("SolutionsServices")}
                        >
                          <li>
                            <Link href="/services">
                              {t("menu.servicesGrid")}
                            </Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("SolutionsServices")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <Link href="/products">{t("products")}</Link>
                      </li>
                      <li>
                        <Link href="/projects">{t("projects")}</Link>
                      </li>
                      <li>
                        <Link href="/eshop">{t("eshop")}</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => activeMenuSet("NewsResources")}
                        >
                          {t("newsResources")}
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul
                          className="submenu"
                          style={activeLi("NewsResources")}
                        >
                          <li>
                            <Link href="/blogs-grid">{t("menu.blogGrid")}</Link>
                          </li>
                          <li>
                            <Link href="/blog-news">{t("menu.blogNews")}</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("NewsResources")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="mean-last">
                        <Link href="/contact">{t("contact")}</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>{t("contactInfo")}</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        {tFooter("addressText")}
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@arvisys.com">
                        <span className="mailto:info@arvisys.com">
                          info@arvisys.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+97675750077">+976-75750077</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href className="theme-btn">
                    {t("contactUs")}
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a
                    href="https://www.facebook.com/Arvis.Systems"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://x.com/ArvisSystems"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay" />
    </Fragment>
  );
};
