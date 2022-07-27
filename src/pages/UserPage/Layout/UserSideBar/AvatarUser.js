import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCameraFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  GET_INFOR_USER,
  SUCCESS,
} from '../../../../constants/globalVariable';
import { userInfor } from '../../../../services/userSevice';
import { EditProfile } from './EditProfile';

export const AvatarUser = () => {
  const id = useSelector((state) => state.userSlice.user.user._id);
  const dispatch = useDispatch();
  const [updateAvatar, setUpdateAvatar] = useState(false);
  const { user } = useSelector((state) => state.userPageReducer);

  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = async () => {
    if (imageUpload === null) return;
    let formData = new FormData();

    formData.append('avatar', imageUpload, imageUpload.name);

    try {
      const res = await userInfor.updateAvatarUser(formData);
      console.log(res);
      if (res.status === SUCCESS) {
        dispatch({
          type: GET_INFOR_USER,
          payload: id,
        });
        setImageUpload(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (imageUpload) {
      document.getElementById('img').src =
        URL.createObjectURL(imageUpload);
    }
  }, [imageUpload]);
  return (
    <div className='flex flex-col w-full p-[30px] bg-white border rounded-sm border-[#dadbdd]'>
      <div className='w-[100px] h-[100px] rounded-full'>
        <img
          className='w-full h-full object-cover'
          src={user.avatar}
          alt='img'
        />
      </div>
      <div>
        <div className='w-[150px] h-[150px] group relative mx-auto rounded-full bg-[#e4e5e7] flex overflow-hidden justify-center items-center'>
          {/* {user?.avatar ? ( */}
          <img
            id='img'
            className='w-full h-full object-cover'
            src={user.avatar}
            alt='img'
          />
          {/* // ) : (
          //   <span className='text-6xl text-white font-semibold'>
          //     {user?.name?.trim().slice(0, 1).toLocaleUpperCase()}
          //   </span>
          // )} */}
          <div
            id='user-img'
            className='absolute -z-10 transition-all duration-300 cursor-pointer  inset-0 group-hover:z-10 bg-slate-700 flex justify-center items-center overflow-hidden'
          >
            <input
              type='file'
              onChange={(e) => {
                setUpdateAvatar(true);
                console.log(e.target.files[0]);
                setImageUpload(e.target.files[0]);
              }}
              className='absolute inset-0 opacity-0 rounded-full cursor-pointer'
            />
            <BsCameraFill className='text-white text-6xl' />
          </div>
        </div>
        <h3 className='text-2xl font-semibold text-center mt-2 mb-3'>
          {user?.name}
        </h3>
        <div className='flex justify-center'>
          {updateAvatar ? (
            <div
              onClick={() => {
                uploadImage();
                setUpdateAvatar(false);
              }}
              className='bg-blue-500 text-white font-semibold text-lg py-2 px-4 rounded-md cursor-pointer hover:scale-105 transition-all'
            >
              Upload
            </div>
          ) : (
            <EditProfile />
          )}
        </div>
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
