import { Rate } from 'antd';
import React from 'react';
import SliderImgDetailWork from './SliderImgDetailWork';
import SliderReviews from './SliderReviews';

export const Overview = () => {
  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold'>
        I will convert sketch, psd, xd to html responsive bootstrap 4
      </h1>
      <div className='py-8 flex justify-between items-center border-b-2'>
        <img
          className='w-[40px] h-[40px] rounded-full object-cover'
          src='https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt=''
        />
        <span className='text-lg font-medium'>innovatorytheme</span>
        <span className='text-lg font-normal'>Level 2 Seller</span>
        <span className='inline-block w-[3px] h-[15px] bg-[#b9babc]'></span>
        <span className='flex items-center gap-x-2 text-xl '>
          <Rate
            className='leading-none'
            allowClear
            allowHalf
            defaultValue={5}
          />
          <span className='leading-none font-bold text-[#FADB14]'>
            5
          </span>
          <span className='leading-none font-normal text-lg'>
            2 Orders in Queue
          </span>
        </span>
      </div>
      <div>
        <SliderImgDetailWork />
      </div>

      <div className='flex justify-between items-center pt-10 pb-5'>
        <h1 className='text-2xl font-semibold'>
          What people loved about this seller
        </h1>
        <span className='text-lg text-green-500 hover:underline cursor-pointer'>
          See all reviews
        </span>
      </div>
      <div>
        <SliderReviews />
      </div>
    </div>
  );
};
