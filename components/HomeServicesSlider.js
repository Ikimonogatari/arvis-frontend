"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import { useGetServicesQuery } from "@/lib/api/directusApi";

const HomeServicesSlider = () => {
  const t = useSafeTranslations("services");
  const { data: servicesData, error, isLoading } = useGetServicesQuery();

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/service/01.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  // Fallback services using translation keys
  const fallbackServices = [
    { id: 1, key: "dataCenter", image: "assets/img/service/01.jpg", icon: "flaticon-engineering" },
    { id: 2, key: "ups", image: "assets/img/service/02.jpg", icon: "flaticon-engineering" },
    { id: 3, key: "cooling", image: "assets/img/service/03.jpg", icon: "flaticon-maintenance" },
    { id: 4, key: "network", image: "assets/img/service/04.jpg", icon: "flaticon-connection" },
    { id: 5, key: "cabling", image: "assets/img/service/05.jpg", icon: "flaticon-connection" },
    { id: 6, key: "cctv", image: "assets/img/service/06.jpg", icon: "flaticon-cctv-camera" },
    { id: 7, key: "security", image: "assets/img/service/07.jpg", icon: "flaticon-cyber-security" },
  ];

  // Use API services if available, otherwise use fallback
  const servicesToDisplay = servicesData && servicesData.length > 0 
    ? servicesData.map((service) => ({
        id: service.id,
        name: service.name || service.title,
        description: service.description,
        image: getImageUrl(service.image),
        icon: service.icon || "flaticon-engineering",
      }))
    : fallbackServices.map((service) => ({
        ...service,
        name: t(`${service.key}.title`),
        description: t(`${service.key}.sub`),
      }));

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
          {servicesToDisplay.map((service) => (
            <SwiperSlide key={service.id} className="swiper-slide">
              <Link 
                href={servicesData && servicesData.length > 0 
                  ? `/services-details?id=${service.id}` 
                  : `/quote?service=${service.key}`
                } 
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="single-service-item wow fadeInUp"
                  data-wow-delay="200ms"
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
                    <img 
                      src={service.image} 
                      alt={service.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="content mb-3">
                    <div className="icon">
                      <i className={service.icon} />
                    </div>
                    <h4>{service.name}</h4>
                    <p className="!text-sm">{service.description}</p>
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
