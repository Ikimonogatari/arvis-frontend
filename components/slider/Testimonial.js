"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <Swiper {...sliderProps.testimonial} className="swiper testimonial-slide">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className="clints-infu pt-4 pt-xxl-5  text-center text-md-start">
                <h5>William Jekson</h5>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>William Jekson</h5>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                I believe in lifelong learning and they are a great place to
                learn from experts. I have learned a lot and recommend it
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>William Jekson</h5>
                <span>Product Manager</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="array-button">
        <button className="array-prev">
          <i className="fas fa-long-arrow-left" />
        </button>
        <button className="array-next">
          <i className="fas fa-long-arrow-right" />
        </button>
      </div>
    </Swiper>
  );
};
export default Testimonial;

export const Testimonial2 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial2}
      className="swiper testimonial-slide-2"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot color-style-two border-style center pt-5">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const Testimonial3 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial3}
      className="swiper testimonial-slide-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              I believe in lifelong learning and they are a great place to learn
              from experts. I have learned a lot and recommend it
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>William Jekson</h6>
                <p>Product Manager</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="array-button">
        <button className="array-next">
          <i className="fas fa-long-arrow-right" />
        </button>
        <button className="array-prev">
          <i className="fas fa-long-arrow-left" />
        </button>
      </div>
    </Swiper>
  );
};
export const Testimonial4 = () => {
  return (
    <Swiper {...sliderProps.testimonial4} className="swiper testimonial-4">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Their advanced AI solutions helped us streamline operations and
              improve user experiences effortlessly."
            </p>
            <div className="client-info">
              <h4>William Jekson</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Exceptional Service for AI Innovation"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Steve Smit</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Top AI Partner for <br /> Growth"
            </h3>
            <p className="text">
              "Their AI-driven insights helped us make smarter decisions,
              boosting our overall business performance."
            </p>
            <div className="client-info">
              <h4>Will Jacks</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Michael Jon</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Their advanced AI solutions helped us streamline operations and
              improve user experiences effortlessly."
            </p>
            <div className="client-info">
              <h4>William Jekson</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Exceptional Service for AI Innovation"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Steve Smit</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Top AI Partner for <br /> Growth"
            </h3>
            <p className="text">
              "Their AI-driven insights helped us make smarter decisions,
              boosting our overall business performance."
            </p>
            <div className="client-info">
              <h4>Will Jacks</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Michael Jon</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
