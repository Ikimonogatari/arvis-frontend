"use client";

import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetServiceByIdQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ServiceDetailsContent = () => {
  const t = useSafeTranslations("header");
  const tQuote = useSafeTranslations("quote");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: service,
    error,
    isLoading,
  } = useGetServiceByIdQuery(id, {
    skip: !id,
  });

  const directusUrl =
    process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/service/details-1.jpg";
    return `${directusUrl}/assets/${imageData.id}`;
  };

  if (isLoading) {
    return (
      <ZotechLayout>
        <Pagebanner pageName="Service Details" />
        <section className="service-details-section fix section-padding">
          <div className="container">
            <p>Loading service details...</p>
          </div>
        </section>
      </ZotechLayout>
    );
  }

  const title =
    service?.name || service?.title || "IT Infrastructure Solutions";
  const description =
    service?.description ||
    "Professional IT infrastructure and management services";
  const mainImage = getImageUrl(service?.image);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: title },
  ];

  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName={title} breadcrumbs={breadcrumbs} />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Accelerate Innovation with <br /> {title}
                </h2>
                <p>{description}</p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img
                    src={mainImage}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Professional IT Solutions</h4>
                  <p className="mt-3">{description}</p>
                  <p className="mt-3">
                    We provide comprehensive IT infrastructure solutions
                    tailored to your business needs. Our expert team ensures
                    reliable, scalable, and secure technology implementations
                    that drive your business forward. From initial consultation
                    to final deployment and ongoing support, we are your trusted
                    partner in technology excellence.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-video-content ">
                          <div className="section-title">
                            <h2>We provide truly prominent solutions</h2>
                            <p className="pt-4">
                              Arvis Systems is the partner of choice for modern
                              IT infrastructure, providing world-class solutions
                              to businesses of all sizes.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu ">
                              <img src="assets/img/about/06.png" alt="" />
                              <h6>
                                Join our Satisfied <br /> Business Clients
                              </h6>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Trusted Partner</h6>
                              </div>
                              <p>
                                Our great team of IT experts <br /> deliver
                                excellence.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
      {/* Service Request a Quote Section - at bottom */}
      <section
        className="section-padding section-bg"
        style={{ overflow: "visible" }}
      >
        <div className="container" style={{ overflow: "visible" }}>
          <div
            className="cta-inner wow fadeInUp d-flex align-items-center justify-content-between flex-wrap gap-4"
            data-wow-delay="200ms"
            style={{
              padding: "48px 56px",
              borderRadius: "20px",
              background:
                "linear-gradient(84deg, var(--theme) 0%, var(--theme-5) 100%)",
              rowGap: "24px",
            }}
          >
            <div
              className="d-flex align-items-center gap-4 flex-grow-1 flex-wrap"
              style={{ gap: "24px" }}
            >
              <div
                className="icon d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--white)",
                  fontSize: "36px",
                }}
              >
                <i
                  className="flaticon-customer-support"
                  style={{
                    background:
                      "linear-gradient(84deg, var(--theme) 0%, var(--theme-5) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                />
              </div>
              <div className="title">
                <h3
                  className="mb-2"
                  style={{
                    color: "var(--white)",
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "var(--white)",
                    fontSize: "18px",
                    marginBottom: 0,
                    opacity: 0.95,
                  }}
                >
                  {tQuote("subtitle")}
                </p>
              </div>
            </div>
            <Link
              href={`/quote?serviceId=${encodeURIComponent(id || "")}&serviceName=${encodeURIComponent(title)}`}
              className="theme-btn white-btn flex-shrink-0"
            >
              {t("requestQuote")}
            </Link>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

const page = () => {
  return (
    <Suspense
      fallback={
        <ZotechLayout>
          <Pagebanner pageName="Service Details" />
          <section className="service-details-section fix section-padding">
            <div className="container">
              <p>Loading...</p>
            </div>
          </section>
        </ZotechLayout>
      }
    >
      <ServiceDetailsContent />
    </Suspense>
  );
};

export default page;
