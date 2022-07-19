import { Rate } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import SliderImgDetailWork from './SliderImgDetailWork';
import SliderReviews from './SliderReviews';

export const Overview = () => {
  const { comment } = useSelector((state) => state.workDetailReducer);
  const { workDetail } = useSelector(
    (state) => state.workDetailReducer
  );

  return (
    <div id='overview' className='w-full'>
      <h1 className='lg:text-3xl text-2xl font-bold'>
        {`${
          workDetail.name && workDetail.name[0].toUpperCase()
        }${workDetail?.name?.slice(1)}`}
      </h1>
      <div className='py-8 flex justify-between flex-wrap items-center border-b-2'>
        <div className='flex items-center sm:mb-0 mb-2 gap-x-2'>
          <div className='w-[40px] h-[40px]  font-semibold rounded-full text-white text-3xl bg-gray-500 '>
            <span className='h-full text-center inline-block w-full'>
              {workDetail?.name?.slice(0, 1)}
            </span>
          </div>
          {/* <img
            className='w-[40px] h-[40px] rounded-full object-cover'
            src={workDetail?.image}
            alt=''
          /> */}
          <span className='text-lg font-medium'>
            {workDetail?.name?.slice(0, 8)}
          </span>
          <span className='text-lg font-normal'>Level 2 Seller</span>
        </div>

        <span className='flex items-center gap-x-2 text-xl'>
          <Rate
            className='leading-none'
            allowClear
            allowHalf
            value={
              Math.floor(workDetail?.rating | 0) > 5
                ? 5
                : +Math.floor(workDetail?.rating)
            }
          />
          <span className='leading-none font-bold text-[#FADB14]'>
            {Math.floor(workDetail?.rating | 0) > '5.0'
              ? 5
              : Math.floor(workDetail?.rating | 0) + '.0'}
          </span>
          <span className='leading-none font-normal text-lg'>
            {workDetail.usersBooking ? 1 : ''} Orders in Queue
          </span>
        </span>
      </div>
      <div>
        <SliderImgDetailWork />
      </div>

      <div className='flex justify-between items-center pt-10 pb-5'>
        {comment.length > 0 && (
          <>
            <h1 className='text-2xl font-semibold'>
              What people loved about this seller
            </h1>
            <span className='text-lg text-green-500 hover:underline cursor-pointer'>
              See all reviews
            </span>
          </>
        )}
      </div>
      <div>
        <SliderReviews />
      </div>
    </div>
  );
};
