import { Input, Tooltip } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { notificationAlert } from '../../../../utils/notifycation';

export const Certification = () => {
  const { user } = useSelector((state) => state.userPageReducer);

  const [certification, setCertification] = useState('');
  const [listCertificate, setListCertificate] = useState([]);
  const [showEdit, setShowEdit] = useState(true);

  const handleUpdateSkill = () => {
    const checkIndexCertificationExist = listCertificate.findIndex(
      (item) => item === certification
    );

    if (checkIndexCertificationExist === -1) {
      setListCertificate([...listCertificate, certification]);
      notificationAlert('success', 'Add Certification Success');
    } else {
      setListCertificate([...listCertificate]);
      notificationAlert(
        'warning',
        'Add Certification Fail',
        'Certification has been exist'
      );
    }
    setShowEdit(true);

    setCertification('');
  };
  useEffect(() => {
    if (user.certification) {
      setListCertificate(user.certification);
    }
  }, [user]);
  return (
    <div className='mb-10 pb-10 border-b border-[#dadbdd] text-lg'>
      <div>
        <Tooltip
          overlayStyle={{ maxWidth: '310px' }}
          placement='topLeft'
          title={
            <p className='text-md font-semibold'>
              Listing your honnors and awards can help you stand out
              from other seller
            </p>
          }
        >
          <div className='flex justify-between items-center text-lg'>
            <span className='font-bold'>Certification</span>
            {showEdit && (
              <span
                onClick={() => setShowEdit(false)}
                className='hover:underline cursor-pointer'
              >
                Add New
              </span>
            )}
          </div>
        </Tooltip>
      </div>

      {!showEdit && (
        <div className=' mt-3 w-full flex flex-col  p-4 pb-0  bg-[#f4f4f4] border border-[#dadbdd] rounded-sm '>
          <div className='cursor-pointer mb-4'>
            <Input
              onChange={(e) => setCertification(e.target.value)}
              placeholder='Your certificate'
              size='large'
            />
          </div>

          <div className='flex-1 flex items-center justify-between text-lg font-semibold py-4'>
            <button
              onClick={() => {
                setShowEdit(true);
              }}
              className='py-2  hover:border-[#c9cbce] hover:text-green-500 transition-all border-[#dadbdd] px-8 border bg-white  rounded-sm'
            >
              Cancel
            </button>
            {certification ? (
              <button
                onClick={handleUpdateSkill}
                className='py-2 hover:bg-green-400 transition-all border-[#dadbdd] px-8 border bg-green-500 text-white rounded-sm'
              >
                Update
              </button>
            ) : (
              <button className='py-2  transition-all border-[#dadbdd] px-8 border bg-slate-300 text-white rounded-sm'>
                Update
              </button>
            )}
          </div>
        </div>
      )}

      <div className='flex flex-col gap-y-2 mt-4'>
        {listCertificate.length > 0 &&
          listCertificate.map((item, i) => {
            return (
              <div
                key={i}
                className='flex items-center gap-x-3  justify-start'
              >
                <span className='group px-4 py-2 rounded-[30px]  flex items-center gap-x-4 cursor-pointer'>
                  <span className='font-semibold'>{item}</span>
                  <div className='group-hover:opacity-100 group-hover:flex items-center opacity-0  gap-x-1 transition-all duration-300 hidden'>
                    <RiDeleteBin6Line
                      onClick={() => {
                        setListCertificate([
                          ...listCertificate.slice(i + 1),
                        ]);
                        notificationAlert(
                          'warning',
                          'Delete Skill Success'
                        );
                      }}
                      className='cursor-pointer'
                    />
                  </div>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
