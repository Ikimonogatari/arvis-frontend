"use client";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import HeroArticleSlider from "@/components/HeroArticleSlider";
import HomeServicesSlider from "@/components/HomeServicesSlider";
import { TeamMember2 } from "@/components/TeamMember";
import BrandSlider from "@/components/slider/BrandSlider";
import CaseStudySlider from "@/components/slider/CaseStudySlider";
import Testimonial from "@/components/slider/Testimonial";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { Fragment } from "react";

const page = () => {
  const t = useSafeTranslations("home");

  return (
    <Fragment>
      <ZotechLayout header={1} footer={1}>
        {/* Hero Section Start - Swipeable Articles */}
        <HeroArticleSlider />
        {/* features Section Start */}
        <section className="features-wrapper features-1">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      {t("features.feature1.title")}
                    </Link>
                  </h4>
                  <p>{t("features.feature1.description")}</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature1.list1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature1.list2")}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-energy" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      {t("features.feature2.title")}
                    </Link>
                  </h4>
                  <p>{t("features.feature2.description")}</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature2.list1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature2.list2")}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-cyber-security" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      {t("features.feature3.title")}
                    </Link>
                  </h4>
                  <p>{t("features.feature3.description")}</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature3.list1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature3.list2")}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-settings" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      {t("features.feature4.title")}
                    </Link>
                  </h4>
                  <p>{t("features.feature4.description")}</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature4.list1")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      {t("features.feature4.list2")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-1 section-padding">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="about-images">
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="icon video-popup"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <div className="image-1">
                    <img src="assets/img/about/01.jpg" alt="img" />
                  </div>
                  <div className="image-2">
                    <img src="assets/img/about/02.png" alt="img" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="about-content mt-4 ms-xxl-4">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>{t("about.subTitle")}</span>
                    </div>
                    <h2 className="split-text right">{t("about.title")}</h2>
                  </div>
                  <p>{t("about.description")}</p>
                  <ul>
                    {Array.isArray(t("about.list")) &&
                      t("about.list").map((item, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle" />
                          {item}
                        </li>
                      ))}
                  </ul>

                  <div className="about-infu">
                    <Link href="about" className="theme-btn black-btn">
                      {t("about.moreAboutUs")}
                    </Link>
                    <div className="contact-us">
                      <img src="assets/img/about/03.png" alt />
                      <div className="text">
                        <span>{t("about.callToAsk")}</span>
                        <h4>+976-75750077</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section Start */}
        <section className="service-wrapper service-1 section-bg section-padding">
          <div className="shapes">
            <img className="shape-1" src="assets/img/shape/shape-1.png" alt />
            <img className="shape-2" src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="service-inner">
              <div className="row">
                <div
                  className="col-xl-7 col-lg-6 col-md-12 col-12  wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="countbox">
                    <h3>
                      <span className="count">
                        <Counter end={10} />
                      </span>
                      +
                    </h3>
                    <p>{t("services.yearsExperience")}</p>
                  </div>
                  <div className="section-title mt-4">
                    <h2 className="split-text left">{t("services.title")}</h2>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-12 col-12  wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="title">
                    <h3>{t("services.description")}</h3>
                  </div>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="86%"
                      />
                    </div>
                    <div className="point">
                      <p>{t("services.progress1")}</p>
                      <span>86%</span>
                    </div>
                  </div>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="90%"
                      />
                    </div>
                    <div className="point">
                      <p>{t("services.progress2")}</p>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <HomeServicesSlider />
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
          <div
            className="bg-image bg-cover"
            style={{ backgroundImage: "url(assets/img/about/01-bg.png)" }}
          />
          <div className="container">
            <div className="about-content wow fadeInUp" data-wow-delay="300ms">
              <div className="section-title text-center">
                <div className="sub-title sub-title2">
                  <span className="text-white">{t("about2.subTitle")}</span>
                </div>
                <h2 className="text-white split-text right">
                  {t("about2.title")}
                </h2>
              </div>
              <p className="text-center">{t("about2.description")}</p>
              <div className="infu text-center d-flex align-items-center justify-content-center">
                <Link href="about" className="theme-btn">
                  {t("about2.getStarted")}
                </Link>
                <div className="contact-us d-flex ">
                  <a href>
                    <i className="fal fa-envelope" />
                  </a>
                  <div className="text text-start">
                    <span>{t("about2.emailUs")}</span>
                    <h4>info@arvisys.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose-us Section Start */}
        <section className="choose-us-wrapper choose-us-1 section-padding pb-xl-0">
          <div className="shape">
            <img src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div
                  className="choose-us-images wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <img src="assets/img/why-choose/01.png" alt />
                  <div className="shape-img">
                    <img src="assets/img/shape/shape-2.png" alt />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-12 mt-5 pt-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="choose-us-content ms-xl-4 ps-xl-1">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>{t("chooseUs.subTitle")}</span>
                    </div>
                    <h2 className="split-text right">{t("chooseUs.title")}</h2>
                  </div>
                  <p className="mt-4 pe-xl-5 me-xl-3 text-center text-md-start">
                    {t("chooseUs.description")}
                  </p>
                  <div className="icon-box d-flex mt-4 pt-3 text-center text-md-start">
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-world" />
                      </div>
                      <h4>{t("chooseUs.box1Title")}</h4>
                      <p>{t("chooseUs.box1Desc")}</p>
                    </div>
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-medal-1" />
                      </div>
                      <h4>{t("chooseUs.box2Title")}</h4>
                      <p>{t("chooseUs.box2Desc")}</p>
                    </div>
                  </div>
                  <div className="count-box">
                    <div className="single-count">
                      <h2>
                        <span className="count">
                          <Counter end={98} />
                        </span>
                        %
                      </h2>
                      <p>{t("chooseUs.count1")}</p>
                    </div>
                    <div className="single-count">
                      <h2>
                        <span className="count">
                          <Counter end={50} />
                        </span>
                        +
                      </h2>
                      <p>{t("chooseUs.count2")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Brand Section Start */}
        <section className="brand-wrapper brand-1 section-bg section-padding">
          <div className="container">
            <div className="brand-inner text-center text-lg-start">
              <h3>Our Global Partner</h3>
              <BrandSlider />
            </div>
          </div>
        </section>
        {/* Team Section Start */}
        <TeamMember2 />
        {/* Case-study Section Start */}
        <section className="case-study-wrapper case-study-1 section-bg section-padding">
          <div className="shape">
            <img className="shape-1" src="assets/img/shape/shape-6.png" alt />
          </div>
          <div className="container">
            <div className="section-title-area">
              <div className="section-title ">
                <div className="sub-title">
                  <span>{t("caseStudy.subTitle")}</span>
                </div>
                <h2 className="split-text left">{t("caseStudy.title")}</h2>
              </div>
              <p className="text-center text-md-start">
                {t("caseStudy.description")}
              </p>
            </div>
          </div>
          <div className="case-study-inner mt-5">
            <CaseStudySlider />
          </div>
        </section>
        {/* Testimonial Section Start */}
        <section className="testimonial-wrapper testimonial-1 section-padding pb-0">
          <div className="shape">
            <img className="shape-1" src="assets/img/shape/shape-13.png" alt />
            <img className="shape-2" src="assets/img/shape/shape-14.png" alt />
          </div>
          <div className="container ">
            <div className="section-title text-center">
              <div className="sub-title">
                <span>{t("testimonials.subTitle")}</span>
              </div>
              <h2 className="split-text left">{t("testimonials.title")}</h2>
              <p>{t("testimonials.description")}</p>
            </div>
            <div className="testimonial-inner overflow-hidden">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* Process Section Start */}
        <section
          className="process-wrapper process-1 section-padding bg-cover"
          style={{ backgroundImage: "url(assets/img/process/process-bg.jpg)" }}
        >
          <div className="shape">
            <img className="shape-1" src="assets/img/process/shape-1.png" alt />
            <img className="shape-2" src="assets/img/process/shape-2.png" alt />
            <img className="shape-3" src="assets/img/process/shape-3.png" alt />
            <img
              className="shape-4 d-none d-xxl-block"
              src="assets/img/process/shape-4.png"
              alt
            />
            <img
              className="shape-5 d-none d-xxl-block"
              src="assets/img/process/shape-5.png"
              alt
            />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="sub-title sub-title2">
                <span className="text-white">{t("process.subTitle")}</span>
              </div>
              <h2 className="text-white split-text left">
                {t("process.title")}
              </h2>
            </div>
            <div className="process-items d-grid justify-content-between">
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="icon">01</div>
                <div className="image">
                  <img src="assets/img/process/01.jpg" alt />
                </div>
                <h4>{t("process.step1Title")}</h4>
                <p>{t("process.step1Desc")}</p>
              </div>
              <div
                className="single-process-item text-center wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="icon">02</div>
                <div className="image">
                  <img src="assets/img/process/02.jpg" alt />
                </div>
                <h4>{t("process.step2Title")}</h4>
                <p>{t("process.step2Desc")}</p>
              </div>
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="icon">03</div>
                <div className="image">
                  <img src="assets/img/process/03.jpg" alt />
                </div>
                <h4>{t("process.step3Title")}</h4>
                <p>{t("process.step3Desc")}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Video Section Start */}
        <div className="video-wrapper video-1">
          <div className="container">
            <div
              className="video-image bg-cover wow fadeInUp"
              data-wow-delay="300ms"
              style={{ backgroundImage: "url(assets/img/video-01.jpg)" }}
            >
              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                className="video-button video-popup"
              >
                <i className="fas fa-play" />
                <i className="video-button-ripple" />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Section Start */}
        <Contact wrapperClass="contact-us-wrapper contact-us-1 section-padding" />
        {/* Blog Section Start */}
        <Blog wrapperClass="blog-wrapper blog-1 section-padding section-bg" />
      </ZotechLayout>
    </Fragment>
  );
};
export default page;
