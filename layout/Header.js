"use client";
import { zotechUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  useEffect(() => {
    zotechUtility.serarchpopup();
  }, []);

  const HeaderComponent =
    [Header1, Header2, Header3, Header4][header - 1] || Header1;
  return (
    <>
      <HeaderComponent />
      <MobileMenu />
      <SearchPoppup />
    </>
  );
};
export default Header;

const Header1 = () => {
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            {/* <ul>
              <li>
                <i className="fal fa-phone-alt" />
                <a href>+44 920 090 505 </a>
              </li>
              <li>
                <i className="fal fa-map-marker-alt" />
                <a href>60 East 65th Street, NY</a>
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
                      <img
                        src="assets/img/logo/black-logo.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <Menu />
                  </div>
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button  d-none d-sm-block">
                    <a href className="theme-btn black-btn">
                      Get In Touch
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

const Header2 = () => {
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
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button  d-none d-sm-block">
                  <div className="contact-us ">
                    <a href className="icon">
                      <i className="far fa-phone-alt" />
                    </a>
                    <div className="title">
                      <p>Phone:</p>
                      <span>(704) 555-0127</span>
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
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar style-2">
        <div className="container-fluid">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            <p>
              An Zotech or MSP who keeps your IT running smoothly at all times.
            </p>
            <div className="topbar-right d-flex align-items-center">
              <ul>
                <li>
                  <i className="fal fa-phone-alt" />
                  <a href>+44 920 090 505 </a>
                </li>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  <a href>60 East 65th Street, NY</a>
                </li>
                <li>
                  <i className="far fa-clock" />
                  <a href>8.00am - 10.00pm</a>
                </li>
              </ul>
              {/* /.topbar__info */}
              <div className="social">
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
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button d-none d-md-block">
                    <a href className="theme-btn black-btn">
                      Get In Touch
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
                    <p>Phone:</p>
                    <span>(704) 555-0127</span>
                  </div>
                </div>
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button d-none d-sm-block">
                  <a href className="theme-btn black-btn theme-btn-2">
                    Get In Touch
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
  return (
    <div className="main-menu">
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li>
                <div className="homemenu-items">
                  <div className="homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/" className="theme-btn">
                          <div className="theme-btn-inner">View Demo</div>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-2" className="theme-btn">
                          <div className="theme-btn-inner">View Demo</div>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-3" className="theme-btn">
                          <div className="theme-btn-inner">View Demo</div>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link href="/index-4" className="theme-btn">
                          <div className="theme-btn-inner">View Demo</div>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <a href="#" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/index">Home 01</Link>
              </li>
              <li>
                <Link href="/index-2">Home 02</Link>
              </li>
              <li>
                <Link href="/index-3">Home 03</Link>
              </li>
              <li>
                <Link href="/index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Pages
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/teams-details">Team Details</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/faqs">FAQS</Link>
              </li>
              <li>
                <Link href="/404">404</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Services
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/services">Services Grid</Link>
              </li>
              <li>
                <Link href="/services-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Projects
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/projects">Projects Grid</Link>
              </li>
              <li>
                <Link href="/projects-details">Project Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              News
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/blogs-grid">Blog Grid</Link>
              </li>
              <li>
                <Link href="/blog-news">Blog &amp; News</Link>
              </li>
              <li>
                <Link href="/blogs-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MobileMenu = () => {
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
                    <img src="assets/img/logo/black-logo.png" alt="logo-img" />
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
                      <li className="has-dropdown  menu-thumb">
                        <Link href="/">
                          Home
                          <i className="fas fa-angle-down" />
                        </Link>
                        <ul className="submenu has-homemenu">
                          <li>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <img
                                    src="assets/img/header/home-1.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link href="/" className="theme-btn">
                                      <div className="theme-btn-inner">
                                        View Demo
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 01</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="assets/img/header/home-2.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link href="index-2" className="theme-btn">
                                      <div className="theme-btn-inner">
                                        View Demo
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 02</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="assets/img/header/home-3.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link href="index-3" className="theme-btn">
                                      <div className="theme-btn-inner">
                                        View Demo
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 03</h4>
                                </div>
                              </div>
                              <div className="homemenu">
                                <div className="homemenu-thumb mb-15">
                                  <img
                                    src="assets/img/header/home-4.jpg"
                                    alt="img"
                                  />
                                  <div className="demo-button">
                                    <Link href="index-4" className="theme-btn">
                                      <div className="theme-btn-inner">
                                        View Demo
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">Home 04</h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <a className="mean-expand" href="#">
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="has-dropdown  d-xl-none">
                        <a
                          href="#"
                          className="border-none"
                          onClick={() => activeMenuSet("home")}
                        >
                          Home
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("home")}>
                          <li>
                            <Link href="/">Home 01</Link>
                          </li>
                          <li>
                            <Link href="index-2">Home 02</Link>
                          </li>
                          <li>
                            <Link href="index-3">Home 03</Link>
                          </li>
                          <li>
                            <Link href="index-4">Home 04</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("home")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => activeMenuSet("Pages")}>
                          Pages
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("Pages")}>
                          <li>
                            <Link href="team">Team</Link>
                          </li>
                          <li>
                            <Link href="teams-details">Team Details</Link>
                          </li>
                          <li>
                            <Link href="about">About</Link>
                          </li>
                          <li>
                            <Link href="pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link href="faqs">FAQS</Link>
                          </li>
                          <li>
                            <Link href="404">404</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Pages")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => activeMenuSet("Services")}>
                          Services
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("Services")}>
                          <li>
                            <Link href="services">Services Grid</Link>
                          </li>
                          <li>
                            <Link href="services-details">Service Details</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Services")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="has-dropdown">
                        <a href="#" onClick={() => activeMenuSet("Projects")}>
                          Projects
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("Projects")}>
                          <li>
                            <Link href="projects">Projects Grid</Link>
                          </li>
                          <li>
                            <Link href="projects-details">Project Details</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Projects")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={() => activeMenuSet("News")}>
                          News
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("News")}>
                          <li>
                            <Link href="blogs-grid">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="blog-news">Blog &amp; News</Link>
                          </li>
                          <li>
                            <Link href="blogs-details">Blog Details</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("News")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li className="mean-last">
                        <Link href="contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@azent.com">
                        <span className="mailto:info@example.com">
                          info@example.com
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
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href className="theme-btn">
                    Contact Us
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
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

const SearchPoppup = () => {
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <i className="fas fa-times search-close" id="search-close" />
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
