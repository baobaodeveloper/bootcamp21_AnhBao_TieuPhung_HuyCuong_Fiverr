import React, { useEffect, useState } from 'react';
import { CardSelling } from './CardSelling';
import { BsPlusLg } from 'react-icons/bs';
import { Modal } from 'antd';
import { CreateJob } from './CreateJob';
import { useSelector } from 'react-redux';

export const UserSelling = () => {
  const { user } = useSelector((state) => state.userPageReducer);
  const { listWork } = useSelector(
    (state) => state.listWorkPageReducer
  );
  const [listWorkUserCreate, setListWorkUserCreate] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (listWork.length > 0 && user?._id) {
      setListWorkUserCreate(
        listWork.flat().filter((job) => job.userCreated === user._id)
      );
    }
  }, [listWork, user]);
  console.log(listWorkUserCreate);
  return (
    <div className='grid grid-cols-3 gap-y-5 justify-items-center'>
      {listWorkUserCreate.length > 0 &&
        listWorkUserCreate.map((job) => {
          return <CardSelling job={job} key={job._id} />;
        })}

      <div className='w-[232px] h-[260px] flex justify-center items-center  border rounded-sm border-[#dadbdd] bg-white'>
        <div className='flex flex-col items-center'>
          <div
            onClick={() => setVisible(true)}
            className='w-[66px] h-[66px] bg-[#78cdd2] text-white text-3xl flex justify-center items-center rounded-full cursor-pointer'
          >
            <BsPlusLg />
          </div>
          <div>
            <Modal
              width={'600px'}
              footer={null}
              title='Create New Job'
              visible={visible}
              onOk={() => setVisible(true)}
              onCancel={() => setVisible(false)}
            >
              <CreateJob setVisible={setVisible} />
            </Modal>
          </div>

          <h3 className='font-semibold text-lg'>Create A New Gig</h3>
        </div>
      </div>
    </div>
  );
};
