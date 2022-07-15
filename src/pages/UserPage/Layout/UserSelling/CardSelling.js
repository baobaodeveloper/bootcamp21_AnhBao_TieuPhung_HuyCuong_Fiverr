import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Button, Tooltip } from 'antd';

export const CardSelling = () => {
  return (
    <div className='w-[232px] h-[260px]  border rounded-sm border-[#dadbdd] bg-white overflow-hidden'>
      <img
        className='w-full h-[145px] object-cover'
        src='https://images.unsplash.com/photo-1657865360539-a6b1ab862ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='img'
      />
      <div className='p-2 h-[115px] flex flex-col'>
        <h3 className='text-[16px] font-semibold hover:text-green-500 transition-all'>
          I will web developer with HTML,CSS,javascript
        </h3>

        <div className='flex items-center justify-between mt-auto text-green-500'>
          <span className='text-2xl cursor-pointer'>
            <Tooltip placement='topLeft' title='Edit'>
              <BsThreeDots />
            </Tooltip>
          </span>
          <div className='flex items-center gap-x-1'>
            <span className='font-semibold'>STARTING AT</span>
            <span className='text-2xl leading-none'>$5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
