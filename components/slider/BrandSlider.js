"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetPartnersQuery } from "@/lib/api/articlesApi";

const BrandSlider = () => {
  const { data: partners, error, isLoading } = useGetPartnersQuery();

  // Helper to get logo URL
  const getLogoUrl = (logoData) => {
    if (!logoData || !logoData.id) return "assets/img/brand/01.png";
    return `http://217.154.145.65:8055/assets/${logoData.id}`;
  };

  // Fallback brands if no data
  const fallbackBrands = [
    "assets/img/brand/01.png",
    "assets/img/brand/02.png",
    "assets/img/brand/03.png",
    "assets/img/brand/04.png",
    "assets/img/brand/05.png",
    "assets/img/brand/06.png",
  ];

  const displayPartners = partners && partners.length > 0 ? partners : [];

  return (
    <Swiper
      {...sliderProps.BrandSlider}
      className="swiper brand-slider mt-4 pt-3"
    >
      <div className="swiper-wrapper">
        {displayPartners.length > 0 ? (
          displayPartners.map((partner) => (
            <SwiperSlide key={partner.id} className="swiper-slide">
              <div className="brand-logo">
                <img 
                  src={getLogoUrl(partner.logo)} 
                  alt={partner.name || "Partner"} 
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          fallbackBrands.map((brand, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="brand-logo">
                <img src={brand} alt="Partner" />
              </div>
            </SwiperSlide>
          ))
        )}
      </div>
    </Swiper>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  const { data: partners, error, isLoading } = useGetPartnersQuery();

  const getLogoUrl = (logoData) => {
    if (!logoData || !logoData.id) return "assets/img/brand/07.png";
    return `http://217.154.145.65:8055/assets/${logoData.id}`;
  };

  const fallbackBrands = [
    "assets/img/brand/07.png",
    "assets/img/brand/08.png",
    "assets/img/brand/09.png",
    "assets/img/brand/10.png",
    "assets/img/brand/11.png",
    "assets/img/brand/12.png",
  ];

  const displayPartners = partners && partners.length > 0 ? partners : [];

  return (
    <Swiper {...sliderProps.BrandSlider} className="swiper brand-slider">
      <div className="swiper-wrapper">
        {displayPartners.length > 0 ? (
          displayPartners.map((partner) => (
            <SwiperSlide key={partner.id} className="swiper-slide">
              <div className="brand-logo">
                <img 
                  src={getLogoUrl(partner.logo)} 
                  alt={partner.name || "Partner"} 
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          fallbackBrands.map((brand, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="brand-logo">
                <img src={brand} alt="Partner" />
              </div>
            </SwiperSlide>
          ))
        )}
      </div>
    </Swiper>
  );
};
