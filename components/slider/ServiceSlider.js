"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const ServiceSlider = () => {
  return (
    <div className="service-inner text-center overflow-hidden mt-4 pt-3">
      <Swiper {...sliderProps.service}>
        <div className="service-slide">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
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
                  Back up your database, store in a safe and secure place while
                  still maintaining.
                </p>
                <Link href="services-details" className="infu-btn">
                  Read More
                  <i className="far fa-long-arrow-right" />
                </Link>
              </div>
            </SwiperSlide>
          </div>
        </div>
        <div className="array-button">
          <button className="array-prev ">
            <i className="fas fa-long-arrow-left" />
          </button>
          <button className="array-next ">
            <i className="fas fa-long-arrow-right" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
export default ServiceSlider;

export const ServiceSlider2 = () => {
  return (
    <Swiper {...sliderProps.service2} className="swiper service-slide-2">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="signle-service-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="icon">
              <img src="assets/img/service/service-icon-1.png" alt />
            </div>
            <div className="content">
              <h3>
                <Link href="services-details">
                  Data Analytics <br /> and Insights
                </Link>
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Professional Global Entrepreneur
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Expert Team Member
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="signle-service-item wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="icon">
              <img src="assets/img/service/service-icon-2.png" alt />
            </div>
            <div className="content">
              <h3>
                <Link href="services-details">
                  AI Traning &amp; <br /> Workshops
                </Link>
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Professional Global Entrepreneur
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Expert Team Member
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="signle-service-item wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="icon">
              <img src="assets/img/service/service-icon-3.png" alt />
            </div>
            <div className="content">
              <h3>
                <Link href="services-details">
                  Custom AI Software <br /> Development
                </Link>
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Professional Global Entrepreneur
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Expert Team Member
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="signle-service-item wow fadeInUp"
            data-wow-delay="800ms"
          >
            <div className="icon">
              <img src="assets/img/service/service-icon-2.png" alt />
            </div>
            <div className="content">
              <h3>
                <Link href="services-details">
                  Robotic Process <br /> Automation
                </Link>
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Professional Global Entrepreneur
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Expert Team Member
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
