import { Rate } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const CommentContent = () => {
  const { id } = useParams();
  const { comment } = useSelector((state) => state.workDetailReducer);
  const [number, setNumber] = useState(4);

  useEffect(() => {
    setNumber(4);
  }, [id]);
  return (
    <div className='text-lg flex flex-col  mt-10'>
      {comment.length > 0 &&
        comment.slice(0, number).map((item) => {
          return (
            <div
              key={item._id}
              className='flex  gap-x-5 border-b mb-8 pb-8'
            >
              <div className='w-10 h-10 text-2xl flex-shrink-0 font-semibold bg-slate-400 rounded-full text-center leading-10  text-white '>
                <span className='flex justify-center items-center'>
                  {item.user.name.slice(0, 1).toUpperCase()}
                </span>
              </div>

              <div className='flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <span className='font-semibold text-xl'>
                    {item.user.name}
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
                    src='https://img.icons8.com/color/344/vietnam.png'
                    alt='GB'
                    loading='lazy'
                  />
                  <span>VietNam</span>
                </div>

                <p>{comment.content}</p>

                <span className='text-slate-400'>
                  Published 1 month ago
                </span>

                <div className='flex gap-x-5'>
                  <div className='flex items-center gap-x-1 cursor-pointer'>
                    <BiLike className='text-xl' />
                    <span className='text-md font-semibold'>
                      HelpFul
                    </span>
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
                      Excellent Communications Skills & So Easy To
                      Work With Him
                    </p>
                    <span className='text-slate-400'>
                      Published 1 month ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {comment.length > 4 && (
        <span
          onClick={() => {
            if (number < comment.length) {
              setNumber(number + 4);
            }
          }}
          className='text-green-500 cursor-pointer'
        >
          + See More
        </span>
      )}
    </div>
  );
};
