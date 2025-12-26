"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const CaseStudySlider = () => {
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
        <SwiperSlide className="swiper-slide">
          <div
            className="single-case-item  wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="image">
              <img src="assets/img/case/04.jpg" alt />
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
        <SwiperSlide className="swiper-slide">
          <div
            className="single-case-item  wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="image">
              <img src="assets/img/case/04.jpg" alt />
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
