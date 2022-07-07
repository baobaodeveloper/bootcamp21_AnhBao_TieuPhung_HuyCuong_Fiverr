import { Rate } from 'antd';
import React from 'react';

export const CommentStarRight = () => {
  return (
    <div className='text-lg flex-1'>
      <h4 className='font-semibold'>Rating Breakdown</h4>

      <div className='mt-3 flex flex-col gap-y-3'>
        <div className='flex justify-between'>
          <span className='text-[#95979d]'>
            Seller communication level
          </span>
          <div className='flex items-center gap-x-1'>
            <span className='leading-none'>
              <Rate count={1} defaultValue={1} />
            </span>
            <span className='text-[#ffb33e] font-semibold leading-none'>
              4.9
            </span>
          </div>
        </div>

        <div className='flex justify-between'>
          <span className='text-[#95979d]'>
            Recommend to a friend
          </span>
          <div className='flex items-center gap-x-1'>
            <span className='leading-none'>
              <Rate count={1} defaultValue={1} />
            </span>
            <span className='text-[#ffb33e] font-semibold leading-none'>
              4.9
            </span>
          </div>
        </div>

        <div className='flex justify-between'>
          <span className='text-[#95979d]'>Service as described</span>
          <div className='flex items-center gap-x-1'>
            <span className='leading-none'>
              <Rate count={1} defaultValue={1} />
            </span>
            <span className='text-[#ffb33e] font-semibold leading-none'>
              4.9
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
