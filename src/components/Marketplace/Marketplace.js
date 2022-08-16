import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { BaseService } from '../../services/baseService';


const imgSources = [
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg',
  'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg',
];
// console.log("imgSource", imgSources);

let typeWorkService = new BaseService();

export default function Marketplace() {
  const { typeJob } = useSelector((state) => state.headerReducer);

  return (
    <div className='marketplace py-0 w-full mx-auto container lg:mb-24 sm:mb-20 lg:px-0 md:px-8 px-6'>
      <h2 className='text-3xl mb-10 lg:pb-6 sm:text-3xl font-bold'>Explore the marketplace</h2>
      <ul className='flex flex-wrap'>
        {typeJob.map((item, index) => {
          return (
            <li key={item.id} className='lg:w-[20%] sm:pb-14 sm:w-[33.3%] text-center pt-0 px-2.5 pb-8 w-[50%]'>
              <a href={`/list_type/${item.name}`} className="text-center text-[#222325] relative inline-block after:content-[''] 
                  after:absolute after:top-11 after:right-[50%] after:w-12 after:border-b-2 
                  after:border-solid after:border-[#c5c6c9] after:pt-0 
                  after:px-0 after:pb-2 hover:after:border-[#1dbf73] hover:after:w-[74px] 
                  after:transition-[width] after:ease-in-out after:duration-200 after:translate-x-1/2">
                <img className='block h-12 w-12 mt-0 mx-auto mb-4'
                  src={imgSources[index]}
                  alt='Digital Marketing'
                  loading='lazy'
                />
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
