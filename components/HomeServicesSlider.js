"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const HomeServicesSlider = () => {
  const t = useSafeTranslations("services");
  
  const services = [
    {
      id: 1,
      key: "dataCenter",
      image: "assets/img/service/01.jpg",
      icon: "flaticon-engineering",
      delay: "200ms",
    },
    {
      id: 2,
      key: "ups",
      image: "assets/img/service/02.jpg",
      icon: "flaticon-engineering",
      delay: "400ms",
    },
    {
      id: 3,
      key: "cooling",
      image: "assets/img/service/03.jpg",
      icon: "flaticon-maintenance",
      delay: "600ms",
    },
    {
      id: 4,
      key: "network",
      image: "assets/img/service/04.jpg",
      icon: "flaticon-connection",
      delay: "200ms",
    },
    {
      id: 5,
      key: "cabling",
      image: "assets/img/service/05.jpg",
      icon: "flaticon-connection",
      delay: "400ms",
    },
    {
      id: 6,
      key: "cctv",
      image: "assets/img/service/06.jpg",
      icon: "flaticon-view",
      delay: "600ms",
    },
    {
      id: 7,
      key: "security",
      image: "assets/img/service/07.jpg",
      icon: "flaticon-lock",
      delay: "200ms",
    },
  ];

  return (
    <div className="service-inner text-center overflow-hidden mt-4 pt-3" style={{ position: 'relative' }}>
      <Swiper 
        {...sliderProps.service} 
        modules={[Navigation, Pagination]}
        className="swiper service-slide"
        preventClicks={false}
        preventClicksPropagation={false}
      >
        <div className="swiper-wrapper">
          {services.map((service) => (
            <SwiperSlide key={service.id} className="swiper-slide">
              <Link href={`/quote?service=${service.key}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="single-service-item wow fadeInUp"
                  data-wow-delay={service.delay}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="shape">
                    <img
                      className="shape-3"
                      src="assets/img/service/shape-1.png"
                      alt
                    />
                    <img
                      className="shape-4"
                      src="assets/img/service/shape-2.png"
                      alt
                    />
                  </div>
                  <div className="image">
                    <img src={service.image} alt />
                  </div>
                  <div className="content mb-3">
                    <div className="icon">
                      <i className={service.icon} />
                    </div>
                    <h4>
                      {t(`${service.key}.title`)}
                    </h4>
                    <p className="!text-sm">{t(`${service.key}.sub`)}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
        <div className="array-button" style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'none'
        }}>
          <button className="array-prev" type="button" style={{ pointerEvents: 'auto' }}>
            <i className="fas fa-long-arrow-left" />
          </button>
          <button className="array-next" type="button" style={{ pointerEvents: 'auto' }}>
            <i className="fas fa-long-arrow-right" />
          </button>
        </div>
        <div className="dot"></div>
      </Swiper>
    </div>
  );
};

export default HomeServicesSlider;

