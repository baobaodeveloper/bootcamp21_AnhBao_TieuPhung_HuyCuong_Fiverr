import { Rate } from 'antd';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export const AboutSellerHeader = () => {
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );
  return (
    <div>
      <h3 className='text-2xl font-semibold '>About The Seller</h3>
      <div className='flex gap-x-8 my-5 text-lg'>
        <img
          className='w-[110px] h-[110px] rounded-full'
          src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9e96d2e75ba1b33abf8ad43a72b0bae0-1511318608456/5e9a9c82-dd2b-4ec7-85f5-bb9ff0f4d9fb.jpg'
          alt='ei8htz'
        />

        <div className='flex flex-col gap-y-2 items-start'>
          <div className='flex  gap-x-4 '>
            <span className='font-semibold'>
              {workDetail?.name?.slice(0, 8)}
            </span>
            <div className='flex border items-center border-green-500 px-2 rounded-[20px] text-green-500'>
              <BsDot />
              <span className='leading-none'>Online</span>
            </div>
          </div>
          <h4>your logo designer</h4>
          <div className='flex items-center mb-2 leading-none gap-x-2'>
            <Rate allowHalf defaultValue={5} />
            <span className='text-[#CEB618] text-lg font-semibold'>
              5.0
            </span>
            <span>(62,582)</span>
          </div>
          <button className='pt-3 pb-4 px-3 text-xl font-semibold text-#62646a border hover:bg-[#62646a] hover:text-white transition-all border-gray-800 rounded-md leading-none'>
            Contanct Me
          </button>
        </div>
      </div>
    </div>
  );
};
