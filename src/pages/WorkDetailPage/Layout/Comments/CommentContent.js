import { Rate } from 'antd';
import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

export const CommentContent = () => {
  return (
    <div className='text-lg flex flex-col  mt-10'>
      <div className='flex  gap-x-5 border-b mb-8 pb-8'>
        <div className='w-10 h-10 text-2xl flex-shrink-0 font-semibold bg-slate-400 rounded-full text-center leading-10  text-white '>
          <span className='flex justify-center items-center'>
            {'orangeredman'.slice(0, 1).toUpperCase()}
          </span>
        </div>

        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <span className='font-semibold text-xl'>
              orangeredman
            </span>
            <div className='text-md leading-none'>
              <Rate allowHalf defaultValue={5} />
            </div>
            <span className='text-[#ffb33e] font-semibold text-xl'>
              5
            </span>
          </div>

          <div className='flex items-center gap-x-3'>
            <img
              className='w-6 h-6 object-cover'
              src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png'
              alt='GB'
              loading='lazy'
            />
            <span>United Kingdom</span>
          </div>

          <p>
            Create the heart of a website for our yoga studio,
            Innovatorytheme were fantastic. Quick, professional and
            exactly what I asked for. Communication always good.
          </p>

          <span className='text-slate-400'>
            Published 1 month ago
          </span>

          <div className='flex gap-x-5'>
            <div className='flex items-center gap-x-1 cursor-pointer'>
              <BiLike className='text-xl' />
              <span className='text-md font-semibold'>HelpFul</span>
            </div>
            <div className='flex items-center gap-x-1 cursor-pointer'>
              <BiDislike className='text-xl' />
              <span className='text-md font-semibold'>
                Not HelpFul
              </span>
            </div>
          </div>

          <div className='flex  gap-x-5 mt-5'>
            <img
              className='w-10 h-10 object-cover'
              src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e18248e1c4a17ea3ee1322c2042617f1-1626529504912/fc706b71-e330-40e1-9705-d8d2b4b8acb8.png'
              alt='innovatorytheme'
              loading='lazy'
            />
            <div className='flex flex-col gap-y-3'>
              <h4 className='font-semibold text-xl'>
                Seller's Response
              </h4>
              <p>
                Excellent Communications Skills & So Easy To Work With
                Him
              </p>
              <span className='text-slate-400'>
                Published 1 month ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex  gap-x-5 border-b mb-8 pb-8'>
        <div className='w-10 h-10 text-2xl flex-shrink-0 font-semibold bg-slate-400 rounded-full text-center leading-10  text-white '>
          <span className='flex justify-center items-center'>
            {'orangeredman'.slice(0, 1).toUpperCase()}
          </span>
        </div>

        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center gap-x-2'>
            <span className='font-semibold text-xl'>
              orangeredman
            </span>
            <div className='text-md leading-none'>
              <Rate allowHalf defaultValue={5} />
            </div>
            <span className='text-[#ffb33e] font-semibold text-xl'>
              5
            </span>
          </div>

          <div className='flex items-center gap-x-3'>
            <img
              className='w-6 h-6 object-cover'
              src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png'
              alt='GB'
              loading='lazy'
            />
            <span>United Kingdom</span>
          </div>

          <p>
            Create the heart of a website for our yoga studio,
            Innovatorytheme were fantastic. Quick, professional and
            exactly what I asked for. Communication always good.
          </p>

          <span className='text-slate-400'>
            Published 1 month ago
          </span>

          <div className='flex gap-x-5'>
            <div className='flex items-center gap-x-1 cursor-pointer'>
              <BiLike className='text-xl' />
              <span className='text-md font-semibold'>HelpFul</span>
            </div>
            <div className='flex items-center gap-x-1 cursor-pointer'>
              <BiDislike className='text-xl' />
              <span className='text-md font-semibold'>
                Not HelpFul
              </span>
            </div>
          </div>

          <div className='flex  gap-x-5 mt-5'>
            <img
              className='w-10 h-10 object-cover'
              src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e18248e1c4a17ea3ee1322c2042617f1-1626529504912/fc706b71-e330-40e1-9705-d8d2b4b8acb8.png'
              alt='innovatorytheme'
              loading='lazy'
            />
            <div className='flex flex-col gap-y-3'>
              <h4 className='font-semibold text-xl'>
                Seller's Response
              </h4>
              <p>
                Excellent Communications Skills & So Easy To Work With
                Him
              </p>
              <span className='text-slate-400'>
                Published 1 month ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className='text-green-500'>+ See More</span>
    </div>
  );
};
