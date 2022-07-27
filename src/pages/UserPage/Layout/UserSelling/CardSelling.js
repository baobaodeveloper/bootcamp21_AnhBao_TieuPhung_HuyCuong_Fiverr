import { Tooltip } from 'antd';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { ImImage } from 'react-icons/im';
export const CardSelling = ({ job }) => {
  const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
  return (
    <div className='w-[232px] h-[260px]  border rounded-md border-[#dadbdd] bg-white overflow-hidden'>
      {job?.image && imageReg.test(job?.image) ? (
        <img
          className='w-full h-[145px] object-cover'
          src={job?.image}
          alt='img'
        />
      ) : (
        <div className='w-full bg-slate-200 h-[145px] flex justify-center items-center'>
          <ImImage className='text-5xl' />
        </div>
      )}

      <div className='p-2 h-[115px] flex flex-col'>
        <h3 className='text-[16px] font-semibold hover:text-green-500 transition-all'>
          {job?.name}
        </h3>

        <div className='flex items-center justify-between mt-auto text-green-500'>
          <span className='text-2xl cursor-pointer'>
            <Tooltip placement='topLeft' title='Edit'>
              <BsThreeDots />
            </Tooltip>
          </span>
          <div className='flex items-center gap-x-1'>
            <span className='font-semibold'>STARTING AT</span>
            <span className='text-2xl leading-none'>
              ${job?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
