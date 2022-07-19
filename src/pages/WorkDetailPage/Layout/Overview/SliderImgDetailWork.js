import { useState } from 'react';
import { Controller } from 'swiper';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
export default function SliderImgDetailWork() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );

  return (
    <>
      <div id='slider-detail-work'>
        <Swiper
          // style={{
          //   '--swiper-navigation-color': '#fff',
          //   '--swiper-pagination-color': '#fff',
          // }}
          // navigation={true}
          // loop={true}
          // thumbs={{
          //   swiper:
          //     thumbsSwiper && !thumbsSwiper.destroyed
          //       ? thumbsSwiper
          //       : null,
          // }}
          // modules={[FreeMode, Navigation, Thumbs, Controller]}
          className='mt-5'
        >
          <SwiperSlide>
            <img alt='img' src={workDetail?.image} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img
              alt='img'
              src='https://swiperjs.com/demos/images/nature-2.jpg'
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div id='slider-detail-work-2'>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className='py-2'
        >
          <SwiperSlide>
            <img alt='img' src={workDetail?.image} />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='img'
              src='https://swiperjs.com/demos/images/nature-2.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='img'
              src='https://swiperjs.com/demos/images/nature-3.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='img'
              src='https://swiperjs.com/demos/images/nature-4.jpg'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt='img'
              src='https://swiperjs.com/demos/images/nature-5.jpg'
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
}
