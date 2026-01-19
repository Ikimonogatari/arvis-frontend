"use client";

import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { useGetServicesQuery } from "@/lib/api/articlesApi";

const page = () => {
  const { data: services, error, isLoading } = useGetServicesQuery();

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/service/08.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const servicesList = services || [];
  const delays = ["200ms", "400ms", "600ms", "800ms"];

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
              Preparing for Your Success, We <br /> Provide Truly IT
              Solutions.
            </h2>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            {isLoading ? (
              <div className="text-center py-5">
                <p>Loading services...</p>
              </div>
            ) : (
              <div className="row gy-xxl-5">
                {servicesList.length > 0 ? (
                  servicesList.map((service, index) => (
                    <div key={service.id} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                      <div
                        className="signle-service-item wow fadeInUp"
                        data-wow-delay={delays[index % 4]}
                      >
                        <div
                          className="service-bg bg-cover"
                          style={{
                            backgroundImage: `url(${getImageUrl(service.image)})`,
                          }}
                        />
                        <div className="icon">
                          <i className={service.icon || "flaticon-web-development"} />
                        </div>
                        <div className="line mb-4" />
                        <h4>
                          <Link href={`/services-details?id=${service.id}`}>
                            {service.name || service.title}
                          </Link>
                        </h4>
                        <p className="pt-3">
                          {service.description || "Professional IT infrastructure solutions."}
                        </p>
                        <Link href={`/services-details?id=${service.id}`} className="infu-btn">
                          Read More
                          <i className="far fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  // Fallback services if no data
                  <>
                    {[
                      { icon: "flaticon-web-development", title: "Data Center Solutions", description: "Enterprise-grade data center infrastructure and management." },
                      { icon: "flaticon-lock", title: "UPS Systems", description: "Reliable uninterruptible power supply solutions." },
                      { icon: "flaticon-user-experience", title: "Cooling Systems", description: "Advanced cooling solutions for IT infrastructure." },
                      { icon: "flaticon-strategy", title: "Network Infrastructure", description: "Comprehensive network design and implementation." },
                      { icon: "flaticon-maintenance", title: "Cabling Solutions", description: "Professional structured cabling services." },
                      { icon: "flaticon-engineering", title: "CCTV Systems", description: "Security and surveillance system installation." },
                      { icon: "flaticon-management", title: "Security Solutions", description: "Comprehensive IT security and monitoring." },
                      { icon: "flaticon-connection", title: "IT Consulting", description: "Expert consultation for IT infrastructure projects." },
                    ].map((service, index) => (
                      <div key={index} className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                        <div
                          className="signle-service-item wow fadeInUp"
                          data-wow-delay={delays[index % 4]}
                        >
                          <div
                            className="service-bg bg-cover"
                            style={{
                              backgroundImage: "url(assets/img/service/08.jpg)",
                            }}
                          />
                          <div className="icon">
                            <i className={service.icon} />
                          </div>
                          <div className="line mb-4" />
                          <h4>
                            <Link href="/services-details">{service.title}</Link>
                          </h4>
                          <p className="pt-3">{service.description}</p>
                          <Link href="/services-details" className="infu-btn">
                            Read More
                            <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
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
