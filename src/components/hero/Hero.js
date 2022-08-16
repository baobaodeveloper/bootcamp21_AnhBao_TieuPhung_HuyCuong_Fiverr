// Import Swiper React components
import { Form, Input } from 'antd';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/scss/effect-fade';
import './hero.scss';

// import required modules
import { useDispatch } from 'react-redux';
import { Autoplay, EffectFade } from 'swiper';
import { SEARCH_JOB } from '../../constants/globalVariable';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

export default function Hero() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='hero-wrapper lg:h-[680px] sm:h-[415px] min-h-[360px] relative bg-green-900'>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className='hero-slide relative mb-0 mx-auto h-full w-full hidden lg:block'
      >
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png')]
          lg:flex w-full h-full bg-cover bg-center">
            <div className='seller-name lg:flex items-end justify-end hidden container mx-auto'>
              <p className="text-white py-8 inline-block px-0">
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png')]
          lg:flex w-full h-full bg-cover bg-center">
            <div className='seller-name show-stars  lg:flex items-end justify-end hidden container mx-auto'>
              <p className="text-white py-8 hidden lg:block before:bg-[url('https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg')]
                      before:bg-no-repeat before:content-[''] before:h-[17px] before:block">
                Moon, <b>Marketing Expert</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png')]
          lg:flex w-full h-full bg-cover bg-center">
            <div className='seller-name lg:flex items-end justify-end hidden container mx-auto'>
              <p className="text-white py-8 inline-block px-0">
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png')]
          lg:flex w-full h-full bg-cover bg-center">
            <div className='seller-name lg:flex items-end justify-end hidden container mx-auto'>
              <p className='text-white py-8 inline-block px-0'>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png')]
          lg:flex w-full h-full bg-cover bg-center">
            <div className='seller-name show-stars lg:flex items-end justify-end hidden container mx-auto'>
              <p className="text-white py-8 hidden lg:block before:bg-[url('https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/five_stars.e5c37f5.svg')]
                      before:bg-no-repeat before:content-[''] before:h-[17px] before:block">
                Gabrielle, <b>Video Editor</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Search */}

      <div className='hero lg:h-[680px] sm:h-[415px] md:flex container mx-auto md:items-center 
      md:justify-center lg:justify-start lg:absolute lg:top-0 lg:left-0 
      lg:right-0 lg:bottom-0 z-[2] lg:px-0 px-6'>
        <div className='header md:max-w-[650px] max-w-[560px] py-20 lg:h-auto lg:p-0 sm:py-24 sm:px-16'>
          <h1 className='font-domaine font-bold lg:text-5xl text-white pb-8 md:pb-5 text-3xl lg:pb-6 sm:pb-4 
          lg:leading-[56px] sm:text-4xl leading-10'>
            <span>
              Find the perfect <i className="font-medium">freelance</i> services for your
              business
            </span>
          </h1>
          <div className='search-bar-package relative z-[5] h-12 block'>
            <Form>
              <AiOutlineSearch className='search-bar-icon absolute z-[5] w-4 h-4 top-4 left-4 fill-slate-400' />
              <Search
                className='search-input'
                enterButton='Search'
                size='large'
                type='search'
                placeholder='Try "building mobile app"'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                onSearch={() => {
                  dispatch({
                    type: SEARCH_JOB,
                    payload: searchValue,
                  });
                  navigate(`/list_work/${searchValue}`);
                }}
              ></Search>
            </Form>
          </div>
          <div className='popular lg:flex hidden text-sm text-white leading-7 pt-6 font-semibold'>
            Popular: 
            <ul className="flex w-full ml-3 list-none">
              <li className="flex mr-3 whitespace-nowrap">
                <a
                  href='/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design'
                  className='text-body-2 no-underline leading-6 font-semibold rounded-[40px] 
                  border px-3 z-[4] hover:bg-white hover:text-gray-900'
                >
                  Website Design
                </a>
              </li>
              <li className="flex mr-3 whitespace-nowrap">
                <a
                  href='/categories/programming-tech/wordpress-services?source=hplo_search_tag&amp;pos=2&amp;name=wordpress-services'
                  className='text-body-2 no-underline leading-6 font-semibold rounded-[40px] 
                  border px-3 z-[4] hover:bg-white hover:text-gray-900'
                >
                  WordPress
                </a>
              </li>
              <li className="flex mr-3 whitespace-nowrap">
                <a
                  href='/categories/graphics-design/creative-logo-design?source=hplo_search_tag&amp;pos=3&amp;name=creative-logo-design'
                  className='text-body-2 no-underline leading-6 font-semibold rounded-[40px] 
                  border px-3 z-[4] hover:bg-white hover:text-gray-900'
                >
                  Logo Design
                </a>
              </li>
              <li className="flex mr-3 whitespace-nowrap">
                <a
                  href='/search/gigs?source=hplo_search_tag&amp;pos=4&amp;query=NFT%20Art'
                  className='text-body-2 no-underline leading-6 font-semibold rounded-[40px] 
                  border px-3 z-[4] hover:bg-white hover:text-gray-900'
                >
                  NFT Art
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
