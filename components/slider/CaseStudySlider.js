"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProjectsQuery } from "@/lib/api/articlesApi";

const CaseStudySlider = () => {
  // Fetch projects from Directus API
  const { data, error, isLoading } = useGetProjectsQuery({
    limit: 10, // Fetch more projects for the slider
    sort: ['sort'], // Sort by sort field
    fields: ['id', 'name', 'description', 'logo', 'image', 'status'],
    filter: {
      status: {
        _eq: 'published'
      }
    }
  });

  // Get image URL from Directus
  const getImageUrl = (image) => {
    if (!image) return 'assets/img/case/01.jpg'; // Fallback image
    
    // If image is a string (UUID), construct Directus URL
    if (typeof image === 'string') {
      const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
      return `${baseUrl}/assets/${image}`;
    }
    
    // If image is an object with id property
    if (image.id) {
      const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
      return `${baseUrl}/assets/${image.id}`;
    }
    
    return 'assets/img/case/01.jpg'; // Fallback
  };

  // Extract projects from Directus response
  const projects = data?.data || data || [];

  // Animation delays
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
  if (error || projects.length === 0) {
    console.error('Error fetching projects:', error);
    // Fallback to default content
    return (
      <Swiper {...sliderProps.caseStudy} className="swiper caseStudy">
        <div className="swiper-wrapper">
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
                    <Link href="projects-details">01. Market Trend Alanysis</Link>
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
                    <Link href="projects-details">03. Business Managment</Link>
                  </h4>
                </div>
                <Link href="projects-details" className="icon">
                  <i className="far fa-long-arrow-right" />
                </Link>
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

  return (
    <Swiper {...sliderProps.caseStudy} className="swiper caseStudy">
      <div className="swiper-wrapper">
        {projects.map((project, index) => {
          const imageUrl = getImageUrl(project.image || project.logo);
          const category = 'PROJECT'; // Default category since it's not in the data
          const title = project.name || 'Project Title';
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
                  <img src={imageUrl} alt={title} />
                </div>
                <div className="content d-flex align-items-center justify-content-between">
                  <div className="title">
                    <span>{category.toUpperCase()}</span>
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
        })}
      </div>
      <div className="swiper-dot mt-5 pt-5 border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
export default CaseStudySlider;

export const CaseStudySlider2 = () => {
  return (
    <Swiper {...sliderProps.caseStudy2} className="swiper caseStudy2">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="single-case-item wow fadeInUp" data-wow-delay="200ms">
            <div className="image">
              <img src="assets/img/case/05.jpg" alt />
            </div>
            <div className="content d-flex align-items-center justify-content-between">
              <div className="title">
                <span>MARKETING</span>
                <h4>
                  <Link href="projects-details">Market Trend Alanysis</Link>
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
                <span>SOFTWARE</span>
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
                <span>MANAGMENT</span>
                <h4>
                  <Link href="projects-details">
                    Business <br /> Managment
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
                <span>MANAGMENT</span>
                <h4>
                  <Link href="projects-details">
                    Business <br /> Managment
                  </Link>
                </h4>
              </div>
              <Link href="projects-details" className="icon">
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot mt-5  border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
