import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { notificationAlert } from '../../../../utils/notifycation';

export const Description = () => {
  const [description, setDescription] = useState('');
  const [historyDescription, setHistoryDescription] = useState('');
  const [showEdit, setShowEdit] = useState(true);
  return (
    <div className='mb-10 pb-10 border-b border-[#dadbdd]'>
      <div>
        <Tooltip
          overlayStyle={{ maxWidth: '310px' }}
          placement='topLeft'
          title={
            <p className='text-md font-semibold'>
              Tell us more about yourself.Buyers are also interested
              in learning about you as a person
            </p>
          }
        >
          <div className='flex justify-between items-center text-lg'>
            <span className='font-bold'>Description</span>
            {showEdit && (
              <span
                onClick={() => setShowEdit(false)}
                className='hover:underline cursor-pointer'
              >
                Edit Description
              </span>
            )}
          </div>
        </Tooltip>
      </div>
      <div className='mt-3'>
        <div
          className={`${
            showEdit ? 'hidden' : ''
          } w-full  p-4 pb-0 h-[235px] bg-[#f4f4f4] border border-[#dadbdd] rounded-sm flex flex-col`}
        >
          <div className='h-[70%] relative bg-[#f4f4f4] border-b border-[#dadbdd]'>
            <textarea
              placeholder=' Tell us more about yourself. Buyers are also interested in learning about you as a person'
              resize='none'
              className=' p-2 text-justify outline-none w-full text-lg h-full bg-[#f4f4f4]'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <span className='absolute z-10 inline-block w-5 h-5  bottom-0 right-0 bg-[#f4f4f4]'></span>
          </div>
          <div className='flex-1 flex items-center justify-between text-lg font-semibold py-4'>
            <button
              onClick={() => {
                setDescription(historyDescription);
                setShowEdit(true);
                notificationAlert('warning', 'Add Description Fail');
              }}
              className='py-2 hover:border-[#c9cbce] hover:text-green-500 transition-all border-[#dadbdd] px-8 border bg-white  rounded-sm'
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setHistoryDescription(description);
                setShowEdit(true);
                notificationAlert(
                  'success',
                  'Add Description Success'
                );
              }}
              className='py-2 hover:bg-green-400 transition-all border-[#dadbdd] px-8 border bg-green-500 text-white rounded-sm'
            >
              Update
            </button>
          </div>
        </div>
        <p className={`${showEdit ? '' : 'hidden'} text-lg mt-3`}>
          {description}
        </p>
      </div>
    </div>
  );
};
