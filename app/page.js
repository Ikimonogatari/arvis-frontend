import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import BrandSlider from "@/components/slider/BrandSlider";
import CaseStudySlider from "@/components/slider/CaseStudySlider";
import Testimonial from "@/components/slider/Testimonial";
import { TeamMember2 } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { Fragment } from "react";
const page = () => {
  return (
    <Fragment>
      <ZotechLayout header={1} footer={1}>
        {/* Hero Section Start */}
        <section className="hero-wrapper hero-1 mx-xl-5">
          <div className="shape">
            <img className="shape-1" src="assets/img/world.png" alt />
          </div>
          <div
            className="hero-bg bg-cover"
            style={{
              backgroundImage: 'url("assets/img/hero/hero-1-1-bg.png")',
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="hero-content pe-xl-3 text-lg-start text-center ">
                  <h1>Empowering Ideas with Technological Excellence</h1>
                  <p>
                    In today's competitive business, the demand for efficient
                    and cost-effective IT solutions has never been more
                    critical.
                  </p>
                  <div className="hero-button mt-4">
                    <Link href="causes" className="theme-btn">
                      Explore More
                    </Link>
                  </div>
                  <div className="feedback d-flex mt-xl-5">
                    <div className="infu">
                      <img src="assets/img/google.png" alt />
                      <p>
                        <span>4.8</span>From&nbsp;799+&nbsp;reviews
                      </p>
                    </div>
                    <div className="infu">
                      <img src="assets/img/rating.png" alt />
                      <p>
                        <span>4.9</span>From&nbsp;200+&nbsp;reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-12  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="hero-image">
                  <img src="assets/img/hero/hero-1.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <i className="flaticon-web-development" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Custom Software Development
                    </Link>
                  </h4>
                  <p>At Zotech, our mission is to you empower businesses.</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
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
                    <i className="flaticon-mobile-app" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Web and Mobile Development
                    </Link>
                  </h4>
                  <p>At Zotech, our mission is to you empower businesses.</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
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
                    <i className="flaticon-cms" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Business and IT Consultancy
                    </Link>
                  </h4>
                  <p>At Zotech, our mission is to you empower businesses.</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
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
                    <i className="flaticon-graphic-design" />
                  </div>
                  <h4>
                    <Link href="services-details">Advance Tool and Design</Link>
                  </h4>
                  <p>At Zotech, our mission is to you empower businesses.</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Career progression
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
                      <span>ABOUT OUR COMPANY</span>
                    </div>
                    <h2 className="split-text right">
                      Highly Tailored Technology, Develop <br /> &amp; Support
                      Services.
                    </h2>
                  </div>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent for all your software development needs.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Website &amp; Mobile application design &amp; Development
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Dramatically re-engineer value added IT systems via
                      mission
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Professional User Experince &amp; Interface researching
                    </li>
                  </ul>
                  <div className="about-infu">
                    <a href className="theme-btn black-btn">
                      More About Us
                    </a>
                    <div className="contact-us">
                      <img src="assets/img/about/03.png" alt />
                      <div className="text">
                        <span>Call to ask any question</span>
                        <h4>0123-456-7890</h4>
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
                        <Counter end={24} />
                      </span>
                      +
                    </h3>
                    <p>Years of Experience</p>
                  </div>
                  <div className="section-title mt-4">
                    <h2 className="split-text left">
                      We run all kinds of&nbsp;IT <br /> services&nbsp;that vow
                      your success
                    </h2>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-12 col-12  wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="title">
                    <h3>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote technology
                    </h3>
                  </div>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="86%"
                      />
                    </div>
                    <div className="point">
                      <p>IT Management</p>
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
                      <p>Data Security</p>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-service-item ">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/01.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-analysis" />
                      </div>
                      <h4>
                        <Link href="services-details">
                          Digital Data Analysis
                        </Link>
                      </h4>
                      <p>
                        We’ll match you to an entire remote team of incredible
                        freelance talent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/02.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-usability" />
                      </div>
                      <h4>
                        <Link href="services-details">QA &amp; Testing</Link>
                      </h4>
                      <p>
                        We’ll match you to an entire remote team of incredible
                        freelance talent
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/03.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-vector" />
                      </div>
                      <h4>
                        <Link href="services-details">UI/UX Design</Link>
                      </h4>
                      <p>
                        We’ll match you to an entire remote team of incredible
                        freelance talent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <span className="text-white">ABOUT OUR COMPANY</span>
                </div>
                <h2 className="text-white split-text right">
                  Technological Applications <br /> Play a Role in Improving Our{" "}
                  <br />
                  Community
                </h2>
              </div>
              <p className="text-center">
                In today's competitive business, the demand for efficient and
                cost-
                <br />
                effective IT solutions has never been more critical.
              </p>
              <div className="infu text-center d-flex align-items-center justify-content-center">
                <Link href="about" className="theme-btn">
                  Get Started Now
                </Link>
                <div className="contact-us d-flex ">
                  <a href>
                    <i className="fal fa-envelope" />
                  </a>
                  <div className="text text-start">
                    <span>Our Gmail</span>
                    <h4>zotech@gmail.com</h4>
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
                      <span>WHY CHOOSE US</span>
                    </div>
                    <h2 className="split-text right">
                      We provide truly prominent IT solutions for your success
                    </h2>
                  </div>
                  <p className="mt-4 pe-xl-5 me-xl-3 text-center text-md-start">
                    Zotech is the partner of choice for many of the world’s
                    leading enterprises, SMEs and technology challengers. We
                    help businesses elevate their value through custom software
                    development, product design, QA and consultancy services.
                  </p>
                  <div className="icon-box d-flex mt-4 pt-3 text-center text-md-start">
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-world" />
                      </div>
                      <h4>Global Company</h4>
                      <p>
                        Our great team of more than to 1400 software experts
                        member.
                      </p>
                    </div>
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-medal-1" />
                      </div>
                      <h4>Award Wining</h4>
                      <p>
                        Our great team of more than to 1400 software experts
                        member.
                      </p>
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
                      <p>Successful Clients</p>
                    </div>
                    <div className="single-count">
                      <h2>
                        <span className="count">
                          <Counter end={6795} />
                        </span>
                        +
                      </h2>
                      <p>Completed Projects</p>
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
                  <span>LATEST CASE STUDY</span>
                </div>
                <h2 className="split-text left">Introduce Our Projects</h2>
              </div>
              <p className="text-center text-md-start">
                SMEs and technology challengers. We help businesses elevate
                <br /> their value through custom software development
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
                <span>OUR TESTIMONIAL</span>
              </div>
              <h2 className="split-text left">What our clients say about us</h2>
              <p>
                Accelerate innovation with world-class tech teams We’ll match{" "}
                <br /> you to an entire remote team of incredible
              </p>
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
                <span className="text-white">WORKING PROCESS</span>
              </div>
              <h2 className="text-white split-text left">
                Get your it solutions in 3 <br /> easy steps
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
                <h4>Understanding Story</h4>
                <p>
                  We help businesses achieve strategic technology
                  transformation, minimising the totality of their end-to-end
                  business
                </p>
              </div>
              <div
                className="single-process-item text-center wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="icon">02</div>
                <div className="image">
                  <img src="assets/img/process/02.jpg" alt />
                </div>
                <h4>Start Working</h4>
                <p>
                  We help businesses achieve strategic technology
                  transformation, minimising the totality of their end-to-end
                  business
                </p>
              </div>
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="icon">03</div>
                <div className="image">
                  <img src="assets/img/process/03.jpg" alt />
                </div>
                <h4>Review &amp; Fixing</h4>
                <p>
                  We help businesses achieve strategic technology
                  transformation, minimising the totality of their end-to-end
                  business
                </p>
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
        {/* Cta Section Start */}
        <section className="cta-wrapper cta-1">
          <div className="container">
            <div
              className="cta-inner bg-cover wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="shape">
                <img
                  className="shape-1"
                  src="assets/img/cta/cta-shape-1.png"
                  alt
                />
                <img className="shape-2" src="assets/img/world.png" alt />
              </div>
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="section-title">
                    <div className="sub-title sub-title2">
                      <span className="text-white">START WITH US</span>
                    </div>
                    <h2 className="text-white">
                      We’re Delivering Best Customer Experience
                    </h2>
                  </div>
                  <Link href="about" className="theme-btn mt-4">
                    Get Started Now
                  </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="images">
                    <img src="assets/img/cta/cta-1.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ZotechLayout>
    </Fragment>
  );
};
export default page;
