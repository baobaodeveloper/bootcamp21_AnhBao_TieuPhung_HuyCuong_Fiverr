import { Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsCameraFill, BsThreeDots } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { actionLoading } from '../../../../components/loading/loadingSlice';
import {
  DELETE_JOB,
  GET_DETAIL_JOB,
  SUCCESS,
} from '../../../../constants/globalVariable';
import { userInfor } from '../../../../services/userSevice';

export const CardSelling = ({ job, setVisible }) => {
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const [hiden, setHiden] = useState(false);

  const handleUpdateImageJob = async (id, imageUpload) => {
    try {
      dispatch(actionLoading.turnOnLoading());
      const fd = new FormData();
      fd.append('job', imageUpload, imageUpload.name);
      const res = await userInfor.updateImageJob(id, fd);
      if (res.status === SUCCESS) {
        setImageUpload(null);
        dispatch(actionLoading.turnOffLoading());
      }
    } catch (error) {
      console.log(error);
      setImageUpload(null);
    }
  };

  useEffect(() => {
    if (imageUpload === null) return;
    document.getElementById('imgJob').src =
      URL.createObjectURL(imageUpload);
  }, [imageUpload]);

  return (
    <div className='w-[232px] h-[260px]  border rounded-md border-[#dadbdd] bg-white overflow-hidden'>
      <div className='relative group'>
        <div className='absolute bg-slate-500 hidden w-full h-full inset-0 bg-opacity-80 group-hover:flex justify-center items-center'>
          <BsCameraFill className='text-5xl text-white' />
        </div>
        <img
          id='imgJob'
          className='w-full h-[145px] object-cover'
          src={
            job?.image
              ? job.image
              : 'https://accesstrade.vn/wp-content/uploads/2022/02/tiep-thi-lien-ket-affiliate-marketing.png'
          }
          alt='img'
        />
        <input
          accept='image/*'
          className='absolute cursor-pointer z-10 w-full h-full top-0 left-0 opacity-0 '
          type='file'
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        {imageUpload && (
          <div className='flex justify-center absolute z-20 bottom-1 left-1/2 -translate-x-1/2'>
            <button
              onClick={() =>
                handleUpdateImageJob(job._id, imageUpload)
              }
              className='text-md font-semibold bg-blue-400 rounded-md text-white py-2 px-4'
            >
              Upload
            </button>
          </div>
        )}
      </div>

      <div className='p-2 h-[115px] flex flex-col'>
        <h3 className='text-[16px] font-semibold hover:text-green-500 transition-all'>
          {job?.name}
        </h3>

        <div className='flex items-center justify-between mt-auto text-green-500'>
          <span className='text-2xl cursor-pointer flex items-center gap-x-2'>
            <span>
              <Tooltip placement='topLeft' title='Edit'>
                <BsThreeDots
                  onClick={() => {
                    dispatch({
                      type: GET_DETAIL_JOB,
                      payload: job._id,
                    });
                    setVisible(true);
                  }}
                />
              </Tooltip>
            </span>
            <span className='text-red-400'>
              <Tooltip placement='topLeft' title='Delete'>
                <AiFillDelete onClick={() => setHiden(true)} />
              </Tooltip>
            </span>
          </span>

          <Modal
            title='Delete Job'
            visible={hiden}
            onOk={() => {
              setHiden(false);
              dispatch({ type: DELETE_JOB, payload: job._id });
            }}
            onCancel={() => setHiden(false)}
            okType='danger'
            okText={<span>Delete</span>}
          >
            <p className='text-2xl'>
              Do you want to delete "{job?.name}"
            </p>
          </Modal>
          <div className='flex items-center gap-x-1'>
            <span className='text-2xl leading-none'>
              ${job?.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
