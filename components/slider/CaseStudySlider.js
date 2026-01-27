"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProjectsQuery } from "@/lib/api/directusApi";

const CaseStudySlider = () => {
  // Fetch projects from GraphQL API
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  // Get image URL from GraphQL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return 'assets/img/case/01.jpg';
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const projectList = projects || [];
  const delays = ['200ms', '400ms', '600ms'];

  // Loading state
  if (isLoading) {
    return (
      <Swiper {...sliderProps.caseStudy} className="swiper caseStudy">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="single-case-item wow fadeInUp" data-wow-delay="200ms">
              <div className="content d-flex align-items-center justify-content-center">
                <p>Loading projects...</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-dot mt-5 pt-5 border-style center">
          <div className="dot" />
        </div>
      </Swiper>
    );
  }

  // Error state or no projects - show fallback
  if (error || projectList.length === 0) {
    console.error('Error fetching projects:', error);
  }

  return (
    <Swiper {...sliderProps.caseStudy} className="swiper caseStudy">
      <div className="swiper-wrapper">
        {projectList.length > 0 ? (
          projectList.map((project, index) => {
            const imageUrl = getImageUrl(project.image);
            const title = project.name || project.title || 'Project Title';
            const description = project.description || '';
            const projectId = project.id;
            const projectSlug = `projects-details?id=${projectId}`;
            const delay = delays[index % delays.length];

            return (
              <SwiperSlide key={projectId} className="swiper-slide">
                <div
                  className="single-case-item  wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <div className="image">
                    <img 
                      src={imageUrl} 
                      alt={title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="content d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>PROJECT</span>
                      <h4>
                        <Link href={projectSlug}>{title}</Link>
                      </h4>
                    </div>
                    <Link href={projectSlug} className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide className="swiper-slide">
              <div
                className="single-case-item  wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="image">
                  <img src="assets/img/case/01.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>MARKETING</span>
                    <h4>
                      <Link href="projects-details">01. Market Trend Analysis</Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="single-case-item  wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="image">
                  <img src="assets/img/case/02.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>SOFTWARE</span>
                    <h4>
                      <Link href="projects-details">02. Software Analysis</Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="single-case-item  wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="image">
                  <img src="assets/img/case/03.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>MANAGMENT</span>
                    <h4>
                      <Link href="projects-details">03. Business Management</Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
      </div>
      <div className="swiper-dot mt-5 pt-5 border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
export default CaseStudySlider;

export const CaseStudySlider2 = () => {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return 'assets/img/case/05.jpg';
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const projectList = projects || [];
  const delays = ['200ms', '400ms', '600ms', '600ms'];

  return (
    <Swiper {...sliderProps.caseStudy2} className="swiper caseStudy2">
      <div className="swiper-wrapper">
        {projectList.length > 0 ? (
          projectList.slice(0, 4).map((project, index) => {
            const imageUrl = getImageUrl(project.image);
            const title = project.name || project.title || 'Project Title';
            const projectId = project.id;
            const projectSlug = `projects-details?id=${projectId}`;

            return (
              <SwiperSlide key={projectId} className="swiper-slide">
                <div className="single-case-item wow fadeInUp" data-wow-delay={delays[index]}>
                  <div className="image">
                    <img 
                      src={imageUrl} 
                      alt={title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="content d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>PROJECT</span>
                      <h4>
                        <Link href={projectSlug}>{title}</Link>
                      </h4>
                    </div>
                    <Link href={projectSlug} className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <>
            <SwiperSlide className="swiper-slide">
              <div className="single-case-item wow fadeInUp" data-wow-delay="200ms">
                <div className="image">
                  <img src="assets/img/case/05.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>PROJECT</span>
                    <h4>
                      <Link href="projects-details">Market Trend Analysis</Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-case-item wow fadeInUp" data-wow-delay="400ms">
                <div className="image">
                  <img src="assets/img/case/06.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>PROJECT</span>
                    <h4>
                      <Link href="projects-details">
                        Software <br /> Analysis
                      </Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-case-item wow fadeInUp" data-wow-delay="600ms">
                <div className="image">
                  <img src="assets/img/case/07.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>PROJECT</span>
                    <h4>
                      <Link href="projects-details">
                        Business <br /> Management
                      </Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-case-item wow fadeInUp" data-wow-delay="600ms">
                <div className="image">
                  <img src="assets/img/case/08.jpg" alt />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>PROJECT</span>
                    <h4>
                      <Link href="projects-details">
                        Business <br /> Management
                      </Link>
                    </h4>
                  </div>
                  <Link href="projects-details" className="icon">
                    <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
      </div>
      <div className="swiper-dot mt-5  border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
