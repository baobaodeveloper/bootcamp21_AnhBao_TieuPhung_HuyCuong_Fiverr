import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

import "./styles.scss";

// import required modules
import { Navigation } from "swiper";

export default function Slide() {
  return (
    <>
      <h2 className="text-3xl mb-5 font-bold">
        Popular professionnal services
      </h2>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-4 left-4">
            <p className="text-sm">Cycbersoft Class</p>
            <p className="text-xl font-semibold">Phung Nguyen</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
