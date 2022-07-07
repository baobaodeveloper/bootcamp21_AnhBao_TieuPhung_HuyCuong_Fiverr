// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import { Rate } from 'antd';

export default function SliderReviews() {
  return (
    <div id='slider-review'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='flex gap-x-5  py-4 px-8 rounded-md'>
            <div className='w-8 h-8 shrink-0'>
              <img
                className='w-full h-full rounded-full object-cover'
                src='https://images.unsplash.com/photo-1657028814638-bf738a9d40c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />
            </div>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-3'>
                <span className='text-lg font-semibold'>
                  somebody07
                </span>
                <div className='flex items-center gap-x-1'>
                  <img
                    className='w-5 h-5 object-cover'
                    src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1fe.png'
                    alt='UY'
                    loading='lazy'
                  />
                  <span className='text-[18px]'>Uruguay</span>
                </div>
                <div className='flex items-center gap-x-1'>
                  <Rate
                    className='text-md leading-none'
                    allowHalf
                    defaultValue={4.5}
                  />
                  <span className='text-lg font-semibold text-[#ccb30e] leading-none'>
                    4.5
                  </span>
                </div>
              </div>
              <p className='text-lg'>
                The first draw looked too rough and maybe not that
                professional, but that's why it's called a draft. For
                US$15 you get a really nice logo with the ...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex gap-x-5  py-4 px-8 rounded-md'>
            <div className='w-8 h-8 shrink-0'>
              <img
                className='w-full h-full rounded-full object-cover'
                src='https://images.unsplash.com/photo-1657028814638-bf738a9d40c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                alt=''
              />
            </div>
            <div className='flex flex-col gap-y-4'>
              <div className='flex gap-x-3'>
                <span className='text-lg font-semibold'>
                  somebody07
                </span>
                <div className='flex items-center gap-x-1'>
                  <img
                    className='w-5 h-5 object-cover'
                    src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1fe.png'
                    alt='UY'
                    loading='lazy'
                  />
                  <span className='text-[18px]'>Uruguay</span>
                </div>
                <div className='flex items-center gap-x-1'>
                  <Rate
                    className='text-md leading-none'
                    allowHalf
                    defaultValue={4.5}
                  />
                  <span className='text-lg font-semibold text-[#ccb30e] leading-none'>
                    4.5
                  </span>
                </div>
              </div>
              <p className='text-lg'>
                The first draw looked too rough and maybe not that
                professional, but that's why it's called a draft. For
                US$15 you get a really nice logo with the ...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
