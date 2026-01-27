"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetProjectByIdQuery } from "@/lib/api/directusApi";

const ProjectDetailsContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: project, error, isLoading } = useGetProjectByIdQuery(id, {
    skip: !id,
  });

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/case/details-1.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  if (isLoading) {
    return (
      <ZotechLayout>
        <Pagebanner pageName="Projects Details" />
        <section className="project-details-section fix section-padding">
          <div className="container">
            <p>Loading project details...</p>
          </div>
        </section>
      </ZotechLayout>
    );
  }

  const title = project?.name || project?.title || "Software Development Analysis";
  const description = project?.description || "Accelerate innovation with world-class tech teams";
  const mainImage = getImageUrl(project?.image);

  return (
    <ZotechLayout>
      <Pagebanner pageName="Projects Details" />
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4">
              <div className="col-xxl-8 col-lg-12">
                <div className="project-details-content pe-xl-4">
                  <div className="project-details-image">
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
                  <h3 className="mt-4">{title}</h3>
                  <p className="mb-3">
                    {description}
                  </p>
                  <p>
                    Building a powerful brand is essential to standing out in
                    today's competitive market. Our Brand Development service
                    focuses on crafting a unique identity that resonates with
                    your target audience, strengthens your brand's presence, and
                    drives long-term success. We dive deep into understanding
                    your business values, vision, and goals to create a brand
                    that reflects your core essence. Contact us today to
                    schedule a free consultation!
                  </p>
                  <div className="row ">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/img/case/details-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/img/case/details-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-4">Project Challenges</h4>
                  <p className="mb-3 mt-3">
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled.
                  </p>
                  <div className="list">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Managed IT Services
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Infrastructure Implementation
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Data Backup Recovery
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Network Optimization
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Security Implementation
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Cloud Integration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-8">
                <div className="project-sidebar-widget">
                  <div className="wid-title">
                    <h3>Project Information</h3>
                  </div>
                  <div className="case-content-box">
                    <ul className="case-infobox">
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Project:</span>
                        <span className="white-clr">{title}</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Category:</span>
                        <span className="white-clr">IT Infrastructure</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Status:</span>
                        <span className="white-clr">{project?.status || "Completed"}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="social text-center">
                    <a href="https://www.facebook.com/Arvis.Systems" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://x.com/ArvisSystems" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
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

const page = () => {
  return (
    <Suspense fallback={
      <ZotechLayout>
        <Pagebanner pageName="Projects Details" />
        <section className="project-details-section fix section-padding">
          <div className="container">
            <p>Loading...</p>
          </div>
        </section>
      </ZotechLayout>
    }>
      <ProjectDetailsContent />
    </Suspense>
  );
};

export default page;
