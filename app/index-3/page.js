import CaseStudy from "@/components/CaseStudy";
import ChooseUs from "@/components/ChooseUs";
import { Contact2 } from "@/components/Contact";
import Counter from "@/components/Counter";
import BrandSlider from "@/components/slider/BrandSlider";
import HeroSlider from "@/components/slider/HeroSlider";
import ServiceSlider from "@/components/slider/ServiceSlider";
import { Testimonial3 } from "@/components/slider/Testimonial";
import TeamMember from "@/components/TeamMember";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const page = () => {
  return (
    <ZotechLayout header={3} footer={3}>
      {/* Hero Section Start */}
      <section className="hero-section hero-3">
        <HeroSlider />
      </section>
      {/* Features Section Start */}
      <section className="features-wrapper features-3">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-feature-item">
                <div className="icon">
                  <i className="flaticon-usability" />
                </div>
                <h4>Highly Tailored IT Design, Management </h4>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-feature-item">
                <div className="icon">
                  <i className="flaticon-analysis" />
                </div>
                <h4>Elevate Their Value Through Custom Software</h4>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-feature-item">
                <div className="icon">
                  <i className="flaticon-expertise" />
                </div>
                <h4>We are Trusted15+ Countries Worldwide </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-wrapper about-3 section-padding pb-0">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-6 col-lg-12 col-md-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="about-images me-xxl-3">
                <div className="image-1">
                  <img src="assets/img/shape/shape-2.png" alt="img" />
                  <div className="experience">
                    <h2>
                      {" "}
                      <span className="count">
                        <Counter end={24} />
                      </span>
                      +
                    </h2>
                    <p>Years of Experience</p>
                  </div>
                </div>
                <div className="image-2">
                  <img src="assets/img/about/07.png" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-8 col-md-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="about-content ms-xxl-3">
                <div className="section-title text-start">
                  <div className="sub-title">
                    <span>ABOUT OUR COMPANY</span>
                  </div>
                  <h2 className="split-text right">
                    Highly Tailored Technology, Develop and Support Services.
                  </h2>
                </div>
                <p>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team of incredible freelance talent
                  for all your software development needs.
                </p>
                <p className="text">
                  SMEs and technology challengers. We help businesses elevate
                  their value through custom software development
                </p>
                <div className="list">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Website &amp; Mobile application
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Dramatically re-engineer value
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Professional User Experience
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Expert Team Member
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Professional Global Entrepreneur
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Cloud Based Services
                    </li>
                  </ul>
                </div>
                <div className="about-infu d-flex align-items-center">
                  <Link href="about" className="theme-btn black-btn">
                    More About Us
                  </Link>
                  <div className="contact-us d-flex align-items-center">
                    <img src="assets/img/about/03.png" alt />
                    <div className="infu">
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
      {/* Brand Section Start */}
      <div className="brand-wrapper brand-1 style-3 section-padding ">
        <div className="container">
          <div className="brand-inner">
            <BrandSlider />
          </div>
        </div>
      </div>
      {/* Service Section Start */}
      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-23.png" alt />
          <img className="shape-2" src="assets/img/shape/shape-11.png" alt />
          <img className="shape-3" src="assets/img/shape/shape-24.png" alt />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="split-text right">
              Preparing for Your Success, We <br /> Provide&nbsp;Truly IT
              Solutions.
            </h2>
          </div>
          <ServiceSlider />
        </div>
      </section>
      {/* Choose-us Section Start */}
      <ChooseUs />
      {/* Contact-us Section Start */}
      <Contact2 />
      {/* Case-study Section Start */}
      <CaseStudy />
      {/* Funfact Section Start */}
      <section className="funfact-wrapper funfact-2 section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-1.png" alt />
        </div>
        <div className="container">
          <div className="funfact-inner">
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
      </section>
      {/* Process Section Start */}
      <WorkingProcess wrapperClass="process-wrapper process-2 section-padding pt-0" />
      {/* Video Section Start */}
      <div className="video-wrapper video-1 style-2 mt-0 pt-0  section-padding">
        <div className="container">
          <div
            className="video-image bg-cover  wow fadeInUp"
            data-wow-delay="200ms"
            style={{ backgroundImage: "url(assets/img/video-03.jpg)" }}
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
      {/* Testimonial Section Start */}
      <section className="testimonial-wrapper testimonial-3 section-padding section-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="testimonial-image">
                <img src="assets/img/testimonial/03.png" alt />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="testimonial-content ps-xl-5">
                <div className="section-title">
                  <div className="sub-title">
                    <span>OUR TESTIMONIAL</span>
                  </div>
                  <h2 className="split-text right">
                    20k+ Satisfied Clients Worldwide
                  </h2>
                </div>
                <Testimonial3 />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section Start */}
      <section className="cta-wrapper cta-2 style-2 half-bg section-padding pt-0">
        <div className="container">
          <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
            <div className="icon">
              <i className="flaticon-customer-support" />
            </div>
            <div className="title">
              <h3 className="split-text right">
                Looking for the Best IT Business Solutions?
              </h3>
              <p>As a app web crawler expert, We will help to organize.</p>
            </div>
            <a href className="theme-btn white-btn">
              Take a Consultant
            </a>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <TeamMember />
      {/* Blog Section Start */}
      <section className="blog-wrapper blog-1 style-3 section-padding section-bg">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title">
                <span>OUR BLOG</span>
              </div>
              <h2 className="split-text right">
                Our Latest Insights &amp; Blog
              </h2>
              <p className="mt-3">
                Accelerate innovation with world-class tech teams We’ll match{" "}
                <br />
                you to an entire remote team of incredible
              </p>
            </div>
            <a href className="theme-btn">
              All Blog &amp; News
            </a>
          </div>
          <div className="blog-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/07.jpg" alt />
                    <img src="assets/img/blog/07.jpg" alt />
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
                      <Link href="blogs-details">
                        Planning your online business goals with a specialist
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote
                    </p>
                    <Link
                      href="blogs-details"
                      className="theme-btn mt-3 trasparent-btn"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/08.jpg" alt />
                    <img src="assets/img/blog/08.jpg" alt />
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
                      <Link href="blogs-details">
                        Holistic Healing: Exploring Health Coaching Techniques
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote
                    </p>
                    <Link
                      href="blogs-details"
                      className="theme-btn mt-3 trasparent-btn"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/09.jpg" alt />
                    <img src="assets/img/blog/09.jpg" alt />
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
                      <Link href="blogs-details">
                        The Art of Self-Care: Lessons from Health Coaching
                      </Link>
                    </h3>
                    <p>
                      Accelerate innovation with world-class tech teams We’ll
                      match you to an entire remote
                    </p>
                    <Link
                      href="blogs-details"
                      className="theme-btn mt-3 trasparent-btn"
                    >
                      More Details
                    </Link>
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
