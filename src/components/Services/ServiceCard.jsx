import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./ServiceCard.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ServiceCard = ({ title, slides }) => {
  const swiperRef = useRef(null);

  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        loop
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="service-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <h4 className="slide-subtitle">{slide.subtitle}</h4>
              <p className="slide-description">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-nav-buttons">
        <button onClick={() => swiperRef.current.slidePrev()} aria-label="Previous Slide">
          <AiOutlineLeft />
        </button>
        <button onClick={() => swiperRef.current.slideNext()} aria-label="Next Slide">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
