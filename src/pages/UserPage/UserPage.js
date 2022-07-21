import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_INFOR_USER } from '../../constants/globalVariable';
import { UserBuying } from './Layout/UserBuying/UserBuying';
import { UserSelling } from './Layout/UserSelling/UserSelling';
import { InforDetail } from './Layout/UserSideBar/InforDetail';

const { TabPane } = Tabs;

export const UserPage = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userSlice.user.user._id);

  const onChange = (key) => {};

  useEffect(() => {
    dispatch({
      type: GET_INFOR_USER,
      payload: id,
    });
  }, [dispatch, id]);
  return (
    <div className='bg-[#f7f7f7]'>
      <div className='container mx-auto py-10 xl:py-20 px-5 gap-x-5 xl:gap-x-20 lg:flex hidden justify-between items-start'>
        <div className='lg:w-[400px]'>
          <InforDetail />
        </div>
        <div className='flex-1 p-[30px] bg-white border rounded-sm border-[#dadbdd]'>
          <Tabs defaultActiveKey='1' onChange={onChange}>
            <TabPane
              tab={
                <span className='xl:text-3xl text-2xl font-semibold'>
                  Buying
                </span>
              }
              key='1'
            >
              <UserBuying />
            </TabPane>
            <TabPane
              tab={
                <span className='xl:text-3xl text-2xl font-semibold'>
                  Selling
                </span>
              }
              key='2'
            >
              <UserSelling />
            </TabPane>
          </Tabs>
        </div>
      </div>

      <div className='lg:hidden container flex justify-center items-center px-2 mx-auto py-10'>
        <Tabs
          style={{ width: '100%' }}
          defaultActiveKey='1'
          onChange={onChange}
        >
          <TabPane
            tab={
              <span className='xl:text-3xl text-2xl font-semibold'>
                Profile
              </span>
            }
            key='1'
          >
            <div className='w-full'>
              <InforDetail />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='xl:text-3xl text-2xl font-semibold'>
                Buying
              </span>
            }
            key='2'
          >
            <div>
              <UserBuying />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span className='xl:text-3xl text-2xl font-semibold'>
                Selling
              </span>
            }
            key='3'
          >
            <div>
              <UserSelling />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
