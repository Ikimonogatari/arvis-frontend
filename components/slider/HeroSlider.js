"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
  return (
    <Swiper {...sliderProps.heroSlider} className="swiper hero-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-3.jpg")',
              }}
            ></div>
            <div className="shape">
              <img className="shape-1" src="assets/img/shape/shape-6.png" alt />
              <img className="shape-2" src="assets/img/shape/shape-7.png" alt />
              <img className="shape-3" src="assets/img/shape/shape-8.png" alt />
              <img className="shape-4" src="assets/img/shape/shape-9.png" alt />
              <img className="shape-5" src="assets/img/shape/shape-4.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="hero-content text-lg-start text-center">
                    <h1>
                      END-TO-END <br /> IT SOLUTIONS
                    </h1>
                    <p className="text">
                      In today's competitive business, the demand for efficient
                      and cost-effective IT solutions for your company.
                    </p>
                    <div className="hero-button">
                      <Link href="causes" className="theme-btn">
                        Explore More
                      </Link>
                      <div className="contact-us d-flex flex-wrap">
                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="icon video-popup"
                        >
                          <i className="fas fa-play" />
                          <i className="video-button-ripple" />
                        </a>
                        <div className="title">
                          <p>Watch</p>
                          <h4>Watch Video</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-3-2.jpg")',
              }}
            ></div>
            <div className="shape">
              <img className="shape-1" src="assets/img/shape/shape-6.png" alt />
              <img className="shape-2" src="assets/img/shape/shape-7.png" alt />
              <img className="shape-3" src="assets/img/shape/shape-8.png" alt />
              <img className="shape-4" src="assets/img/shape/shape-9.png" alt />
              <img className="shape-5" src="assets/img/shape/shape-4.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="hero-content text-lg-start text-center">
                    <h1>
                      END-TO-END <br /> IT SOLUTIONS
                    </h1>
                    <p className="text">
                      In today's competitive business, the demand for efficient
                      and cost-effective IT solutions for your company.
                    </p>
                    <div className="hero-button">
                      <Link href="causes" className="theme-btn">
                        Explore More
                      </Link>
                      <div className="contact-us d-flex flex-wrap">
                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="icon video-popup"
                        >
                          <i className="fas fa-play" />
                          <i className="video-button-ripple" />
                        </a>
                        <div className="title">
                          <p>Watch</p>
                          <h4>Watch Video</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-3-3.jpg")',
              }}
            ></div>
            <div className="shape">
              <img className="shape-1" src="assets/img/shape/shape-6.png" alt />
              <img className="shape-2" src="assets/img/shape/shape-7.png" alt />
              <img className="shape-3" src="assets/img/shape/shape-8.png" alt />
              <img className="shape-4" src="assets/img/shape/shape-9.png" alt />
              <img className="shape-5" src="assets/img/shape/shape-4.png" alt />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="hero-content text-lg-start text-center">
                    <h1>
                      END-TO-END <br /> IT SOLUTIONS
                    </h1>
                    <p className="text">
                      In today's competitive business, the demand for efficient
                      and cost-effective IT solutions for your company.
                    </p>
                    <div className="hero-button">
                      <Link href="causes" className="theme-btn">
                        Explore More
                      </Link>
                      <div className="contact-us d-flex flex-wrap">
                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="icon video-popup"
                        >
                          <i className="fas fa-play" />
                          <i className="video-button-ripple" />
                        </a>
                        <div className="title">
                          <p>Watch</p>
                          <h4>Watch Video</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
export default HeroSlider;

export const HeroSlider2 = () => {
  return (
    <Swiper {...sliderProps.heroSlider2} className="swiper hero-slider2">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-4-1-bg.png")',
              }}
            ></div>
            <div className="shape">
              <img
                className="shape-1"
                src="assets/img/shape/shape-12.png"
                alt
              />
              <div className="shape-text">ARTIFICAL INTELLIGENCE</div>
              <div className="social-shape">
                <img src="assets/img/hero/hero-4-social.png" alt />
                <div className="social">
                  <p>FOLLOW US ON:</p>
                  <ul className="icons">
                    <li>
                      <a className href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="mt-5">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="mt-5">
                      {" "}
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-content ms-xl-4">
                      <h1>Your Vision with AI-Driven Innovation.</h1>
                      <p className="text">
                        In today's competitive business, the demand for
                        efficient and cost-effective IT solutions for your
                        company.
                      </p>
                      <div className="hero-button">
                        <Link href="causes" className="theme-btn theme-btn-2">
                          Get Started
                        </Link>
                        <div className="avater d-flex align-items-center">
                          <img src="assets/img/Avatar.png" alt />
                          <h6 className="text-white ps-3">
                            Join our 50503+ <br /> Satisfied World Clients
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-4.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-4-1-bg.png")',
              }}
            ></div>
            <div className="shape">
              <img
                className="shape-1"
                src="assets/img/shape/shape-12.png"
                alt
              />
              <div className="shape-text">ARTIFICAL INTELLIGENCE</div>
              <div className="social-shape">
                <img src="assets/img/hero/hero-4-social.png" alt />
                <div className="social">
                  <p>FOLLOW US ON:</p>
                  <ul className="icons">
                    <li>
                      <a className href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="mt-5">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="mt-5">
                      {" "}
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-content ms-xl-4">
                      <h1>Your Vision with AI-Driven Innovation.</h1>
                      <p className="text">
                        In today's competitive business, the demand for
                        efficient and cost-effective IT solutions for your
                        company.
                      </p>
                      <div className="hero-button">
                        <Link href="causes" className="theme-btn theme-btn-2">
                          Get Started
                        </Link>
                        <div className="avater d-flex align-items-center">
                          <img src="assets/img/Avatar.png" alt />
                          <h6 className="text-white ps-3">
                            Join our 50503+ <br /> Satisfied World Clients
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-4.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="hero-inner">
            <div
              className="bg-image bg-cover"
              style={{
                backgroundImage: 'url("assets/img/hero/hero-4-1-bg.png")',
              }}
            ></div>
            <div className="shape">
              <img
                className="shape-1"
                src="assets/img/shape/shape-12.png"
                alt
              />
              <div className="shape-text">ARTIFICAL INTELLIGENCE</div>
              <div className="social-shape">
                <img src="assets/img/hero/hero-4-social.png" alt />
                <div className="social">
                  <p>FOLLOW US ON:</p>
                  <ul className="icons">
                    <li>
                      <a className href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="mt-5">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="mt-5">
                      {" "}
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-content ms-xl-4">
                      <h1>Your Vision with AI-Driven Innovation.</h1>
                      <p className="text">
                        In today's competitive business, the demand for
                        efficient and cost-effective IT solutions for your
                        company.
                      </p>
                      <div className="hero-button">
                        <Link href="causes" className="theme-btn theme-btn-2">
                          Get Started
                        </Link>
                        <div className="avater d-flex align-items-center">
                          <img src="assets/img/Avatar.png" alt />
                          <h6 className="text-white ps-3">
                            Join our 50503+ <br /> Satisfied World Clients
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="hero-image">
                      <img src="assets/img/hero/hero-4.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
