import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Services" />
      {/* Service Section Start */}
      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR SERVICES</span>
            </div>
            <h2>
              Preparing for Your Success, We <br /> Provide&nbsp;Truly IT
              Solutions.
            </h2>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-xxl-5">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-web-development" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Web Development</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-lock" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Cyber Security</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-user-experience" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">UI/UX Design</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-strategy" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Business Planning</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-maintenance" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Management</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-engineering" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Data Science</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-management" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">Pro Technology</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                <div
                  className="signle-service-item wow fadeInUp"
                  data-wow-delay="800ms"
                >
                  <div
                    className="service-bg bg-cover"
                    style={{
                      backgroundImage: "url(assets/img/service/08.jpg)",
                    }}
                  />
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="line mb-4" />
                  <h4>
                    <Link href="services-details">IT Consultant</Link>
                  </h4>
                  <p className="pt-3">
                    Back up your database, store in a safe and secure place
                    while still maintaining.
                  </p>
                  <Link href="services-details" className="infu-btn">
                    Read More
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="page-nav-wrap mt-5 text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <ul>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="far fa-angle-right" />
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    01
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    02
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    03
                  </a>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    <i className="far fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <section className="pricing-wrapper pricing-1 style-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>PRICING PLAN</span>
            </div>
            <h2>
              Pricing That Suits <br /> Your Needs
            </h2>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
