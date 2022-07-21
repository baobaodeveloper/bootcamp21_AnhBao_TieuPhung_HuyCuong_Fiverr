import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export const CardBuying = ({ work }) => {
  return (
    <div className='flex gap-x-3 py-2 px-4 border items-center bg-gradient-to-r from-cyan-300 to-blue-300 text-white rounded-sm border-[#dadbdd]'>
      <img
        className='w-[142px] h-[85px] object-cover border rounded-lg'
        src={work.image}
        alt=''
      />
      <div className=' flex flex-col gap-y-3'>
        <h1 className='text-xl font-semibold self-center'>
          {work.name[0].toUpperCase() + work.name.slice(1)}
        </h1>

        <div className='flex justify-between items-center'>
          <div className='flex  items-center gap-x-1'>
            <AiFillStar className='text-xl text-[#ffbe5b]' />
            <span className='text-lg font-semibold '>
              <span className='text-[#ffbe5b]'>
                {Math.floor(work?.rating | 0) > '5.0'
                  ? 5
                  : Math.floor(work?.rating | 0) + '.0'}
              </span>
              {/* <span className='text-[#4a4a4e]'>(276)</span> */}
            </span>
          </div>

          <span className='text-sm font-semibold'>
            {work.name.slice(0, 8)}
          </span>
        </div>
      </div>
    </div>
  );
};
