// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function SliderImage() {
  return (
    <div id='slider-img-card' className='h-full'>
      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        // pagination={{
        //   clickable: true
        // }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1656776650979-71749a79a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80'
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1656775399126-6336f959e9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80'
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
