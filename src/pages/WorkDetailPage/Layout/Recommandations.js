import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import { CardWork } from '../../ListWorkPage/Layout/ListWork/CardWork';

export const Recommandations = () => {
  return (
    <div
      id='recommendations'
      className='border rounded-md py-8 bg-[#fafafa]'
    >
      <h3 className='text-2xl font-semibold px-8'>
        Recommended For You{' '}
      </h3>

      <div id='recommand-container' className='mt-8 '>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='md:block hidden'
          spaceBetween={30}
        >
          <SwiperSlide>
            <div id='recommand' className='flex justify-between '>
              <CardWork />
              <CardWork />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id='recommand' className='flex justify-between '>
              <CardWork />
              <CardWork />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='md:hidden block'
          spaceBetween={30}
        >
          <SwiperSlide>
            <div id='recommand'>
              <CardWork />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id='recommand'>
              <CardWork />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
