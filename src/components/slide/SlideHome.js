// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/effect-fade';

import './styles.scss';

// import required modules
import { EffectFade, Autoplay } from 'swiper';

export default function SlideHome() {
  return (
    <div className='slider-home'>
      {/* <h2 className='text-3xl mb-5 font-bold'>
        Popular professionnal services
      </h2> */}
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay]}
        className='h-[80vh]'
      >
        <SwiperSlide>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1656671504766-11720e7e8bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80)',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1656681777741-b92b4d844c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80)',
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1656682775489-489aa1ff4286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80)',
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
