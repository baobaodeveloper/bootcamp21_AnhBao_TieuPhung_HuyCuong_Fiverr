import { Dropdown, Menu, Space } from 'antd';
import { AiFillStar } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { PopupCard } from '../../../../components/popup/PopupCard';
import { IoMdAdd } from 'react-icons/io';
import SliderImage from './SliderImage';

export const CardWork = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div className='flex items-center text-lg gap-x-2 py-2 px-3'>
              <FaHeart className='text-2xl text-gray-400' />
              <span>My First List</span>
            </div>
          ),
          key: '0',
        },
        {
          label: (
            <div className='flex items-center text-lg gap-x-2 py-2 px-3'>
              <IoMdAdd className='text-2xl text-gray-400' />
              <span>Create List</span>
            </div>
          ),
          key: '1',
        },
      ]}
    />
  );
  return (
    <div className=' w-full '>
      <div className=' rounded-md overflow-hidden border bg-white w-full'>
        <div className='h-[310px]  w-full'>
          <SliderImage />
        </div>
        <div className='p-4'>
          <div className='flex items-center gap-x-4'>
            <img
              className='w-8 h-8 rounded-full object-cover'
              src='https://images.unsplash.com/photo-1656712193135-ef15d7ea27d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
              alt=''
            />
            <div className='text-md flex flex-col'>
              <span className='text-[#222325] text-[18px] font-semibold hover:underline cursor-pointer'>
                innovatorytheme
              </span>
              <span className='text-[#74767e] '>Level 2 Seller</span>
              <span className='text-[#ffbe5b] hidden'>
                Top Rated Seller
              </span>
            </div>
          </div>
          <p className='my-4 hover:text-green-400 transition-all cursor-pointer text-[#222325] text-[18px] font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Delectus
          </p>
          <div className='flex items-center gap-x-1'>
            <AiFillStar className='text-xl text-[#ffbe5b]' />
            <span className='text-lg font-semibold '>
              <span className='text-[#ffbe5b]'>5.0</span>
              <span className='text-[#b5b6ba]'>(276)</span>
            </span>
          </div>
        </div>
        <div className='border-t p-4 flex items-center justify-between'>
          <div className='text-2xl flex items-center gap-x-2'>
            <Dropdown
              placement='topLeft'
              overlay={menu}
              trigger={['click']}
            >
              <span onClick={(e) => e.preventDefault()}>
                <Space>
                  <PopupCard
                    title='Save to list'
                    icon={
                      <GiHamburgerMenu className='cursor-pointer text-gray-400' />
                    }
                  />
                </Space>
              </span>
            </Dropdown>

            <PopupCard
              title='Save to My first list'
              icon={
                <FaHeart className='cursor-pointer text-gray-400' />
              }
            />
          </div>
          <div className=' flex items-center gap-x-2'>
            <span className='text-md font-semibold'>STARTING AT</span>
            <span className='text-2xl font-semibold'>US$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
