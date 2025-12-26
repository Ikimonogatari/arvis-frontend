"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  return (
    <Swiper
      {...sliderProps.BrandSlider}
      className="swiper brand-slider mt-4 pt-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/01.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/02.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/03.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/04.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/05.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/06.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/01.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/02.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/03.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/04.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/05.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/06.png" alt />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  return (
    <Swiper {...sliderProps.BrandSlider} className="swiper brand-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/07.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/08.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/09.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/10.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/11.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/12.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/07.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/08.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/09.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/10.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/11.png" alt />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="brand-logo">
            <img src="assets/img/brand/12.png" alt />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
