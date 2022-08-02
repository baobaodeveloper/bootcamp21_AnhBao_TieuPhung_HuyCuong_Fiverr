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
    <div className='hero-wrapper'>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className='hero-slide relative mb-0 mx-auto'
      >
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png')]">
            <div className='seller-name'>
              <p>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png')]">
            <div className='seller-name show-stars'>
              <p>
                Moon, <b>Marketing Expert</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png')]">
            <div className='seller-name'>
              <p>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png')]">
            <div className='seller-name'>
              <p>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-background lg:bg-[url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png')]">
            <div className='seller-name show-stars'>
              <p>
                Gabrielle, <b>Video Editor</b>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Search */}

      <div className='hero'>
        <div className='header'>
          <h1 className='font-domaine'>
            <span>
              Find the perfect <i>freelance</i> services for your
              business
            </span>
          </h1>
          <div className='search-bar-package'>
            <Form>
              <AiOutlineSearch className='search-bar-icon' />
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
          <div className='popular'>
            Popular:
            <ul>
              <li>
                <a
                  href='/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&amp;pos=1&amp;name=web-plus-mobile-design'
                  className='text-body-2'
                >
                  Website Design
                </a>
              </li>
              <li>
                <a
                  href='/categories/programming-tech/wordpress-services?source=hplo_search_tag&amp;pos=2&amp;name=wordpress-services'
                  className='text-body-2'
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href='/categories/graphics-design/creative-logo-design?source=hplo_search_tag&amp;pos=3&amp;name=creative-logo-design'
                  className='text-body-2'
                >
                  Logo Design
                </a>
              </li>
              <li>
                <a
                  href='/search/gigs?source=hplo_search_tag&amp;pos=4&amp;query=NFT%20Art'
                  className='text-body-2'
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
