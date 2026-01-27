"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetServiceByIdQuery } from "@/lib/api/directusApi";

const ServiceDetailsContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: service, error, isLoading } = useGetServiceByIdQuery(id, {
    skip: !id,
  });

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/service/details-1.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
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

  const title = service?.name || service?.title || "IT Infrastructure Solutions";
  const description = service?.description || "Professional IT infrastructure and management services";
  const mainImage = getImageUrl(service?.image);

  return (
    <ZotechLayout>
      <Pagebanner pageName="Service Details" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Accelerate Innovation with <br /> {title}
                </h2>
                <p>
                  {description}
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img 
                    src={mainImage} 
                    alt={title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Professional IT Solutions</h4>
                  <p className="mt-3">
                    {description}
                  </p>
                  <p className="mt-3">
                    We provide comprehensive IT infrastructure solutions tailored to your business needs.
                    Our expert team ensures reliable, scalable, and secure technology implementations
                    that drive your business forward. From initial consultation to final deployment and
                    ongoing support, we are your trusted partner in technology excellence.
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
                              Arvis Systems is the partner of choice for modern IT infrastructure,
                              providing world-class solutions to businesses of all sizes.
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
                                Our great team of IT experts <br /> deliver excellence.
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
    </ZotechLayout>
  );
};

const page = () => {
  return (
    <Suspense fallback={
      <ZotechLayout>
        <Pagebanner pageName="Service Details" />
        <section className="service-details-section fix section-padding">
          <div className="container">
            <p>Loading...</p>
          </div>
        </section>
      </ZotechLayout>
    }>
      <ServiceDetailsContent />
    </Suspense>
  );
};

export default page;
