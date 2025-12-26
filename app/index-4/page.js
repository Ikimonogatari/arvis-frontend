import Counter from "@/components/Counter";
import Pricing from "@/components/Pricing";
import BrandSlider from "@/components/slider/BrandSlider";
import { HeroSlider2 } from "@/components/slider/HeroSlider";
import { ServiceSlider2 } from "@/components/slider/ServiceSlider";
import { Testimonial4 } from "@/components/slider/Testimonial";
import TextSlider, { TextSlider2 } from "@/components/slider/TextSlider";
import { Home2Accordion } from "@/components/ZotechAccordion";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const page = () => {
  return (
    <ZotechLayout header={4} footer={4}>
      {/* Hero Section Start */}
      <section className="hero-section hero-3 style-2">
        <HeroSlider2 />
      </section>
      {/* Brand Section Start */}
      <div className="brand-wrapper brand-1 style-3 section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-20.png" alt />
        </div>
        <div className="container">
          <div className="brand-inner">
            <p className="text-center mb-5 title split-text right">
              Trusted by&nbsp;3450+&nbsp;happy customers from the whole world
            </p>
            <BrandSlider />
          </div>
        </div>
      </div>
      {/* About Section Start */}
      <section className="about-wrapper about-4 section-padding pt-0">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-12 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="about-images">
                <img src="assets/img/about/08.jpg" alt />
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-12 ps-xl-0 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title">
                    <span>ABOUT OUR COMPANY</span>
                  </div>
                  <h2 className="split-text right">
                    Highly Tailored Technology, Develop and Support Services.
                  </h2>
                </div>
                <p className="ms-xl-5 pt-4">
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software development needs.
                </p>
                <div className="icon-box ms-xl-5">
                  <div className="icon">
                    <i className="flaticon-collection" />
                  </div>
                  <div className="title">
                    <h5>Cost-Effectiveness</h5>
                    <p>
                      Back up your database, store in a safe and secure place
                      while still maintaining.
                    </p>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon">
                    <i className="flaticon-strategy" />
                  </div>
                  <div className="title">
                    <h5>Startup Friendly</h5>
                    <p>
                      Back up your database, store in a safe and secure place
                      while still maintaining.
                    </p>
                  </div>
                </div>
                <div className="infu d-flex align-items-center flex-wrap">
                  <a
                    hLinkef="about"
                    className="theme-btn black-btn theme-btn-2"
                  >
                    More About Us
                  </a>
                  <div className="contact-us d-flex align-items-center">
                    <img src="assets/img/Avatar.png" alt />
                    <span>Meet With Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-wrapper service-5 pb-0">
        <ServiceSlider2 />
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-wrapper funfact-3 section-padding">
        <div
          className="bg-image bg-cover"
          style={{ backgroundImage: "url(assets/img/funfact-bg.jpg)" }}
        />
        <div className="shape-text split-text right">
          ARTIFICAL and INTELLIGENCE
        </div>
        <div className="container">
          <div className="funfact-inner">
            <div className="row g-5">
              <div
                className="col-xl-6 col-lg-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="funfact-content mt-xl-4">
                  <div className="section-title">
                    <div className="sub-title white-sub-title">
                      <span>ABOUT OUR COMPANY</span>
                    </div>
                    <h2>We Are Proud Latest Achievement of Technology</h2>
                  </div>
                  <div className="funfact-items">
                    <div
                      className="signle-funfact-item wow fadeInUp"
                      data-wow-delay="200ms"
                    >
                      <div className="icon">
                        <i className="flaticon-team" />
                      </div>
                      <div className="count-box">
                        <h2>
                          <span className="count">
                            <Counter end={69} />
                          </span>
                          +
                        </h2>
                        <p>Team Member</p>
                      </div>
                    </div>
                    <div
                      className="signle-funfact-item wow fadeInUp"
                      data-wow-delay="400ms"
                    >
                      <div className="icon">
                        <i className="flaticon-test" />
                      </div>
                      <div className="count-box">
                        <h2>
                          <span className="count">
                            <Counter end={854} />
                          </span>
                          +
                        </h2>
                        <p>Media Posts</p>
                      </div>
                    </div>
                    <div
                      className="signle-funfact-item wow fadeInUp"
                      data-wow-delay="600ms"
                    >
                      <div className="icon">
                        <i className="flaticon-mountain" />
                      </div>
                      <div className="count-box">
                        <h2>
                          <span className="count">
                            <Counter end={459} />
                          </span>
                          +
                        </h2>
                        <p>Completed Projects</p>
                      </div>
                    </div>
                    <div
                      className="signle-funfact-item wow fadeInUp"
                      data-wow-delay="800ms"
                    >
                      <div className="icon">
                        <i className="flaticon-project" />
                      </div>
                      <div className="count-box">
                        <h2>
                          <span className="count">
                            <Counter end={98} />
                          </span>
                          %+
                        </h2>
                        <p>Successful Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="funfact-image">
                  <div className="shape">
                    <img
                      className="shape-1"
                      src="assets/img/shape/shape-17.png"
                      alt
                    />
                  </div>
                  <div className="image-1">
                    <img src="assets/img/funfact-1.jpg" alt />
                  </div>
                  <div className="image-2">
                    <img src="assets/img/funfact-2.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee Section Start */}
      <div className="marquee-section section-padding pt-4">
        <div className="marque-wrapper">
          <TextSlider />
        </div>
        <div className="marque-wrapper style-2 mt-3">
          <TextSlider2 />
        </div>
      </div>
      {/* Pricing Section Start */}
      <section className="pricing-wrapper pricing-1 style-2 section-padding pt-0">
        <div className="shape">
          <div className="light-shape" />
          <img className="shape-1" src="assets/img/world.png" alt />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>PRICING PLAN</span>
            </div>
            <h2 className="split-text right">
              Pricing That Suits <br /> Your Needs
            </h2>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Choose-us Section Start */}
      <section className="choose-us-wrapper choose-us-4 section-padding ">
        <div
          className="bg-image bg-cover"
          style={{ backgroundImage: "url(assets/img/why-choose/bg-01.png)" }}
        />
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-17.png" alt />
          <img className="shape-2" src="assets/img/shape/shape-16.png" alt />
          <img className="shape-3" src="assets/img/shape/shape-18.png" alt />
          <img className="shape-4" src="assets/img/shape/shape-19.png" alt />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title white-sub-title">
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="split-text right">
              Save Time, Reduce Costs, <br />
              Empower Our Teams
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-7 col-lg-7 col-md-12 mt-5 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="choose-us-content pe-0 pe-lg-5">
                <Home2Accordion />
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 col-md-12 mt-5 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="choose-us-image">
                <img src="assets/img/why-choose/06.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section Start */}
      <div className="gallery-wrapper section-padding">
        <div className="container">
          <div className="row masonry-layout g-4">
            <div
              className=" col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/10.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/10.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/11.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/11.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/12.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/12.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/13.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/13.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/14.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/14.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/15.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/15.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/16.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/16.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/17.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/17.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="gallery-img">
                <img src="assets/img/gallery/18.jpg" alt="gallery img" />
                <div className="gallery-content">
                  <a href="assets/img/gallery/18.jpg" className="img-popup">
                    <i className="fal fa-plus text-white" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="button text-center mt-5">
            <a href="#" className="theme-btn theme-btn-2 black-btn">
              Load More
            </a>
          </div>
        </div>
      </div>
      {/* Team Section Start */}
      <section className="team-wrapper team-3 section-padding">
        <div
          className="bg-image bg-cover"
          style={{ backgroundImage: "url(assets/img/team/bg-img.jpg)" }}
        />
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-17.png" alt />
          <img className="shape-2" src="assets/img/shape/shape-4.png" alt />
        </div>
        <div className="container ">
          <div className="row align-items-center g-5">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="section-title">
                <div className="sub-title">
                  <span>OUR TEAM MEMBER</span>
                </div>
                <h2 className="text-white split-text right">
                  Meet with Expert <br /> of AI &amp; Technology Team
                </h2>
                <p className="text-white mt-4">
                  Artificial Intelligence encompasses the creation of computer
                  systems capable of executing tasks usually necessitating human
                  intelligence
                </p>
                <Link
                  href="teams-details"
                  className="theme-btn theme-btn-2 mt-4"
                >
                  All Members
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="row ms-xl-4 ps-xl-2 g-4">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-team-item">
                    <div className="image">
                      <img src="assets/img/team/09.jpg" alt />
                    </div>
                    <div className="content">
                      <p>Operations Manager</p>
                      <h4>
                        <Link href="teams-details">Michael Carter</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="single-team-item">
                    <div className="image">
                      <img src="assets/img/team/10.jpg" alt />
                    </div>
                    <div className="content">
                      <p>Operations Manager</p>
                      <h4>
                        <Link href="teams-details">Michael Jon</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="single-team-item">
                    <div className="image">
                      <img src="assets/img/team/11.jpg" alt />
                    </div>
                    <div className="content">
                      <p>Operations Manager</p>
                      <h4>
                        <Link href="teams-details">Kavin Martim</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div className="single-team-item">
                    <div className="image">
                      <img src="assets/img/team/12.jpg" alt />
                    </div>
                    <div className="content">
                      <p>Operations Manager</p>
                      <h4>
                        <Link href="teams-details">Jony Dev</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Start */}
      <section className="testimonial-wrapper testimonial-4 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TESTIMONIAL</span>
            </div>
            <h2>What our clients say about us</h2>
            <p>
              Accelerate innovation with world-class tech teams We’ll match{" "}
              <br /> you to an entire remote team of incredible
            </p>
          </div>
        </div>
        <div className="testimonial-inner mt-5">
          <Testimonial4 />
        </div>
      </section>
      {/* Apps Section Start */}
      <section className="apps-wrapper section-padding pb-0">
        <div
          className="bg-image bg-cover"
          style={{ backgroundImage: "url(assets/img/apps-bg.jpg)" }}
        />
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-5 col-lg-12 col-md-12 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="apps-image">
                <img src="assets/img/app-01.png" alt />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-12 col-md-12 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="apps-content ms-xl-5 ps-xl-2">
                <div className="section-title">
                  <div className="sub-title white-sub-title">
                    <span>DOWNLOAD OUR APP</span>
                  </div>
                  <h2>Experience The Power Of Zotech AI Agency</h2>
                  <div className="avater d-flex align-items-center">
                    <img src="assets/img/avatar-2.png" alt />
                    <h6>64,921 weekly users</h6>
                  </div>
                  <div className="input-form">
                    <input type="text" placeholder="Enter your email" />
                    <button
                      type="submit"
                      className="theme-btn theme-btn-2 black-btn"
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <div className="button">
                    <a href className="theme-btn black-btn white-btn">
                      App Store <i className="fab fa-apple" />
                    </a>
                    <a href className="theme-btn black-btn white-btn">
                      Google Play
                      <i className="fab fa-google-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section Start */}
      <section className="faq-wrapper faq-1 style-2 section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="section-title">
                <div className="sub-title">
                  <span>CONTACT US</span>
                </div>
                <h2 className="split-text right">
                  Frequently Asked <br /> Questions About Us
                </h2>
              </div>
              <div className="faq-content me-xl-4">
                <div className="faq-accordion mt-4 mt-md-0 ">
                  <Home2Accordion />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="faq-images">
                <div className="image-1">
                  <img src="assets/img/faq/01.jpg" alt />
                </div>
                <div className="image-2">
                  <img src="assets/img/faq/02.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section Start */}
      <section className="blog-wrapper blog-2 section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR BLOG</span>
            </div>
            <h2 className="split-text right">Our Latest Insights &amp; Blog</h2>
          </div>
          <p className="text-center mt-3">
            Accelerate innovation with world-class tech teams We’ll match <br />{" "}
            you to an entire remote team of incredible
          </p>
          <div className="blog-inner">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-12 col-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-blog-item">
                      <div className="image">
                        <img src="assets/img/blog/10.jpg" alt />
                      </div>
                      <div className="content">
                        <ul>
                          <li>Marketing</li>
                          <li>
                            {" "}
                            <i className="fas fa-circle" />
                          </li>
                          <li>12 January, 2025</li>
                        </ul>
                        <h5>
                          <Link href="news-details">
                            Top Tips to Stay Motivated and Avoid Burnout While
                            Working
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-blog-item">
                      <div className="image">
                        <img src="assets/img/blog/11.jpg" alt />
                      </div>
                      <div className="content">
                        <ul>
                          <li>Marketing</li>
                          <li>
                            {" "}
                            <i className="fas fa-circle" />
                          </li>
                          <li>12 January, 2025</li>
                        </ul>
                        <h5>
                          <Link href="news-details">
                            Top Tips to Stay Motivated and Avoid Burnout While
                            Working
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-blog-item style-2">
                  <div className="image">
                    <img src="assets/img/blog/12.jpg" alt />
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li>12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="news-details">
                        The Art of Self-Care: Lessons from <br /> Health
                        Coaching
                      </Link>
                    </h3>
                    <Link href="news-details" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-12 col-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="row">
                  <div className="col-xl-12">
                    <div className="single-blog-item">
                      <div className="image">
                        <img src="assets/img/blog/13.jpg" alt />
                      </div>
                      <div className="content">
                        <ul>
                          <li>Marketing</li>
                          <li>
                            {" "}
                            <i className="fas fa-circle" />
                          </li>
                          <li>12 January, 2025</li>
                        </ul>
                        <h5>
                          <Link href="news-details">
                            Top Tips to Stay Motivated and Avoid Burnout While
                            Working
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="single-blog-item">
                      <div className="image">
                        <img src="assets/img/blog/14.jpg" alt />
                      </div>
                      <div className="content">
                        <ul>
                          <li>Marketing</li>
                          <li>
                            {" "}
                            <i className="fas fa-circle" />
                          </li>
                          <li>12 January, 2025</li>
                        </ul>
                        <h5>
                          <Link href="news-details">
                            Top Tips to Stay Motivated and Avoid Burnout While
                            Working
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
