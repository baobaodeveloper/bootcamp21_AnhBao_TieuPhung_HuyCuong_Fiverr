import axios from 'axios';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { BsCameraFill } from 'react-icons/bs';

export const InforBasic = () => {
  // const [imageUpload, setImageUpload] = useState(null);
  // const uploadImage = async () => {
  //   if (imageUpload === null) return;
  //   const fd = new FormData();
  //   fd.append('avatar', imageUpload, imageUpload.name);
  //   try {
  //     const res = await axios({
  //       url: 'https://fiverr.cybersoft.edu.vn/api/users/upload-avatar',
  //       method: 'POST',
  //       data: fd,
  //       headers: {
  //         token:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQ2NTE0YWY4MGZmMDAwMWQ3MmMzMmMiLCJlbWFpbCI6ImFuMTNAZ21haWwuY29tIiwicm9sZSI6IkNMSUVOVCIsImlhdCI6MTY1NzMwNDUyN30.yWsV1370QPo9kDeztgF4SONtYVkWPTyAx0Q7lgwXNLQ',
  //         tokenByClass:
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMSIsIkhldEhhblN0cmluZyI6IjA1LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MDE5ODQwMDAwMCIsIm5iZiI6MTY0MTkyMDQwMCwiZXhwIjoxNjcwMzQ2MDAwfQ.kdBVHpDWKZ-X7NZhWx-Y-ILozaT3RsvaQQF-Yqk4uV4',
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className='flex flex-col w-[400px] p-[30px] bg-white border rounded-sm border-[#dadbdd]'>
      <div>
        <div className='w-[150px] h-[150px] group relative mx-auto rounded-full bg-[#e4e5e7] flex overflow-hidden justify-center items-center'>
          <span className='text-6xl text-white font-semibold'>
            {'baohuynh560'.trim().slice(0, 1).toLocaleUpperCase()}
          </span>
          <div
            id='user-img'
            className='absolute -z-10 transition-all duration-300 cursor-pointer  inset-0 group-hover:z-10 bg-slate-700 flex justify-center items-center overflow-hidden'
          >
            <input
              type='file'
              className='absolute inset-0 opacity-0 rounded-full cursor-pointer'
            />
            <BsCameraFill className='text-white text-6xl' />
          </div>
          {/* <div className='mt-5'>
        <input
          type='file'
          onChange={(e) => {
            console.log(e.target.files[0].name);
            setImageUpload(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload image</button>
      </div> */}
        </div>
        <h3 className='text-2xl font-semibold text-center mt-2 mb-3'>
          baohuynh560
        </h3>
        <button className='w-full py-2 border border-slate-700 rounded-lg text-xl font-semibold hover:text-white hover:bg-slate-600 transition-all'>
          Edit Profile
        </button>
      </div>

      <div className='mt-8 pt-8 border-t border-[#dadbdd]'>
        <div className='flex justify-between items-center text-lg leading-none'>
          <div className='flex items-centerg gap-x-1 '>
            <IoIosPin />
            <span className='font-semibold'>Form</span>
          </div>
          <span className='font-bold'>Vietnam</span>
        </div>
        <div className='flex mt-4 justify-between items-center text-lg leading-none'>
          <div className='flex items-centerg gap-x-1 '>
            <FaUser />
            <span className='font-semibold'>Member since</span>
          </div>
          <span className='font-bold'>Nov 2019</span>
        </div>
      </div>
    </div>
  );
};
