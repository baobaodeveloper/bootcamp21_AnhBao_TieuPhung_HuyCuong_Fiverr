import React from 'react';
import { Tooltip } from 'antd';
import { BiPlusMedical } from 'react-icons/bi';

export const LinkedAccount = () => {
  return (
    <div className='mb-10 pb-10 border-b border-[#dadbdd] text-lg'>
      <div>
        <Tooltip
          overlayStyle={{ maxWidth: '310px' }}
          placement='topLeft'
          title={
            <p className='text-md font-semibold'>
              Linking to online social network
            </p>
          }
        >
          <span className='font-bold'>Language</span>
        </Tooltip>
      </div>

      <div className='flex flex-col gap-y-3 mt-5 '>
        <div className='flex items-center gap-x-2 cursor-pointer hover:text-blue-800'>
          <BiPlusMedical />
          <span className='font-normal'>Facebook</span>
        </div>
        <div className='flex items-center gap-x-2 cursor-pointer hover:text-blue-800'>
          <BiPlusMedical />
          <span className='font-normal'>Google</span>
        </div>
        <div className='flex items-center gap-x-2 cursor-pointer hover:text-blue-800'>
          <BiPlusMedical />
          <span className='font-normal'>Twitter</span>
        </div>
      </div>
    </div>
  );
};
