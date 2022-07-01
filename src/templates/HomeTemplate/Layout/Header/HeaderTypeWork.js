import { Dropdown, Menu, message, Space } from 'antd';

import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const menu = (
  <Menu
    items={[
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]}
  />
);

export const HeaderTypeWork = () => {
  const [slider, setSlider] = useState(9);
  const [group, setGroup] = useState(1);

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (e.currentTarget.innerWidth > 1300) {
        setSlider(9);
        setGroup(9);
      }
      if (e.currentTarget.innerWidth < 1300) {
        setSlider(7);
        setGroup(7);
      }
      if (e.currentTarget.innerWidth < 1200) {
        setSlider(5);
        setGroup(5);
      }
      if (e.currentTarget.innerWidth < 768) {
        setSlider(4);
        setGroup(3);
      }
    });
  });
  return (
    <div className='slider-type_work'>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={slider}
        spaceBetween={10}
        slidesPerGroup={group}
      >
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Graphics & Design</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Digital Marketing</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Writing & Translation</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Video & Animation</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Music & Audio</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Programming & Tech</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Business</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Lifestyle</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
        <SwiperSlide>
          <Dropdown overlay={menu}>
            <span
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            >
              <Space>Trending</Space>
            </span>
          </Dropdown>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
