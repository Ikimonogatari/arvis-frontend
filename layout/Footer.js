import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer, cta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 cta={cta} />;
    default:
      return <Footer4 cta={cta} />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-wrapper ">
      <div className="container">
        <div className="footer-widgets-1 section-padding ">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/black-logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Mauris ut enim sit amet lacus ornare <br /> ullamcorper.
                    Praesent placerat neque eu <br />
                    purus rhoncus
                  </p>
                  <h5>Subscribe Now</h5>
                  <div className="footer-input border-radius-none">
                    <input type="email" id="email2" placeholder="Your Email" />
                    <button
                      className="newsletter-btn border-radius-none"
                      type="submit"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
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
            </div>
            <div
              className="col-xl-2 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-2">
                <div className="widget-head">
                  <h4>Useful Links</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="about">
                      <i className="fas fa-circle" />
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="blog-news">
                      <i className="fas fa-circle" />
                      Blog &amp; News
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="projects">
                      <i className="fas fa-circle" />
                      Our Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Blockchain technology
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Advanced Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Infrastructure Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Data Management
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Security Management
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact">
                      <a href="#">
                        <i className="flaticon-email" />
                      </a>
                      <div className="contact-infu">
                        <span>Mail Us:</span>
                        <h5>zotech@gmail.com</h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a href>
                        <i className="fal fa-map-marker-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Address:</span>
                        <h5 className="text-lowercase">
                          3770 Hidden Meadow Drive Venturia, ND 58489
                        </h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a href="#">
                        <i className="fal fa-phone-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Phone:</span>
                        <h5>(704) 555-0127</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-bg-2">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p className="text-center">
              ©Copyright 2025 Zotech All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-wrapper">
      <FooterContent logo="assets/img/logo/white-logo.png" />
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer className="footer-wrapper section-padding pb-0">
      <FooterContent layout="style-3 style-2" />
    </footer>
  );
};

const Footer4 = ({ cta }) => {
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
      )}
      <footer className="footer-wrapper section-bg-2 section-padding pb-0">
        <div className="marquee-section mt-5 pt-5">
          <div className="mycustom-marque">
            <div className="scrolling-wrap">
              <div className="comm">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className="cmn-textslide color-2">Let’s Talk</div>
                      <div>
                        <img src="assets/img/marquee-box.png" alt="img" />
                      </div>
                      <div className="cmn-textslide">Let’s Talk</div>
                      <div>
                        <img src="assets/img/marquee-box-2.png" alt="img" />
                      </div>
                    </Fragment>
                  ))}
              </div>
              <div className="comm ms-3">
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide ">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContent logo="assets/img/logo/white-logo.png" />
      </footer>
    </Fragment>
  );
};

const FooterContent = ({
  logo = "assets/img/logo/black-logo.png",
  layout = "style-2",
}) => {
  const services = [
    "Blockchain technology",
    "Advanced Technology",
    "Infrastructure Technology",
    "Data Management",
    "Security Management",
  ];

  const contacts = [
    {
      icon: "flaticon-email",
      title: "Mail Us:",
      info: "zotech@gmail.com",
      href: "mailto:zotech@gmail.com",
    },
    {
      icon: "fal fa-map-marker-alt",
      title: "Address:",
      info: "3770 Hidden Meadow Drive Venturia, ND 58489",
      href: "#",
    },
    {
      icon: "fal fa-phone-alt",
      title: "Phone:",
      info: "(704) 555-0127",
      href: "tel:(704) 555-0127",
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
                    <img src={logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Mauris ut enim sit amet lacus ornare <br /> ullamcorper.
                    Praesent placerat neque eu <br />
                    purus rhoncus
                  </p>
                  <h5>Subscribe Now</h5>
                  <div className="footer-input border-radius-none">
                    <input type="email" id="email2" placeholder="Your Email" />
                    <button
                      className="newsletter-btn border-radius-none"
                      type="submit"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
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
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-5 ps-xxl-3">
                <div className="widget-head">
                  <h4>Our Services</h4>
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
                  <h4>Contact Us</h4>
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
                  <h4>Gallery</h4>
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
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p>Copyright 2025 Zotech All Rights Reserved</p>
            <div className="security ">
              <Link href="/contact">Privacy policy</Link>/
              <Link href="/contact">Terms &amp; Condition </Link>/
              <Link href="/about"> About Us</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
