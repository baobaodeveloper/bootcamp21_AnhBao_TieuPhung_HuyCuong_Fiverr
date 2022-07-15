import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export const CardBuying = () => {
  return (
    <div className='flex gap-x-3 py-2 px-4 border items-center bg-gradient-to-r from-cyan-300 to-blue-300 text-white rounded-sm border-[#dadbdd]'>
      <img
        className='w-[142px] h-[85px] object-cover border rounded-lg'
        src='https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80'
        alt=''
      />
      <div className=' flex flex-col gap-y-1'>
        <h1 className='text-lg font-semibold self-center'>Couse1</h1>
        <p className='cursor-pointer text-[#222325] text-[18px] font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          .Delectus
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex  items-center gap-x-1'>
            <AiFillStar className='text-xl text-[#ffbe5b]' />
            <span className='text-lg font-semibold '>
              <span className='text-[#ffbe5b]'>5.0</span>
              <span className='text-[#4a4a4e]'>(276)</span>
            </span>
          </div>

          <span className='text-sm font-semibold'>Author</span>
        </div>
      </div>
    </div>
  );
};
