import { Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
export const CardSelling = ({ job }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;

  useEffect(() => {
    if (imageUpload === null) return;
    document.getElementById('imgJob').src =
      URL.createObjectURL(imageUpload);
    const fd = new FormData();
    // fd.append('image', imageUpload, imageUpload?.name);
    console.log(fd);
  }, [imageUpload]);
  return (
    <div className='w-[232px] h-[260px]  border rounded-md border-[#dadbdd] bg-white overflow-hidden'>
      {job?.image && imageReg.test(job?.image) ? (
        <img
          className='w-full h-[145px] object-cover'
          src={job?.image}
          alt='img'
        />
      ) : (
        <img
          className='w-full h-[145px] object-cover'
          src='https://accesstrade.vn/wp-content/uploads/2022/02/tiep-thi-lien-ket-affiliate-marketing.png'
          alt='img'
        />
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
//  <div>
//    <div className='mt-5'>
//      <div className='w-[150px] h-[150px] relative bg-slate-500 rounded-lg overflow-hidden'>
//        <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center'>
//          <BsImage className='text-7xl text-white' />
//        </div>
//        <Form.Item name='image'>
//          <input
//            className='absolute cursor-pointer z-20 w-full h-full top-0 left-0 opacity-0 '
//            type='file'
//            onChange={(e) => {
//              console.log(e.target.files[0]);
//              setImageUpload(e.target.files[0]);
//            }}
//          />
//        </Form.Item>
//        <img
//          className='w-full h-full object-cover'
//          id='imgJob'
//          alt=''
//        />
//      </div>
//    </div>
//  </div>;
