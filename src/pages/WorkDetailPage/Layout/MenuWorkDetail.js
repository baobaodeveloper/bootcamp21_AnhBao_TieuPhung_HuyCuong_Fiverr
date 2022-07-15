import { Dropdown, Menu, Space } from 'antd';
import { FaHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useEffect, useState } from 'react';
import { AiFillFlag } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { IoShareSocial } from 'react-icons/io5';
import { PopupCard } from '../../../components/popup/PopupCard';
import '../index.scss';

export const MenuWorkDetail = () => {
  const [position, setPosition] = useState(false);
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

  useEffect(() => {
    const typeWork = document
      .querySelector('.slider-type_work')
      .getBoundingClientRect();
    window.addEventListener('scroll', () => {
      if (window.scrollY >= typeWork.bottom) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    });
  }, []);

  return (
    <div
      className={`border-b-2 ${
        position ? 'fixed top-0 w-full  bg-white z-10' : ''
      }`}
    >
      <div className='container mx-auto flex justify-center lg:justify-between px-[15px] flex-wrap'>
        <div className='flex  items-center gap-x-5 text-lg text-[#95979d] font-semibold'>
          <a
            className='py-3 hover:text-[#95979d] text-center border-b-2 border-transparent hover:border-green-400'
            href='#overview'
          >
            Overview
          </a>
          <a
            className='py-3 hidden xl:inline-block hover:text-[#95979d] border-b-2 border-transparent hover:border-green-400'
            href='#description'
          >
            Description
          </a>
          <a
            className='py-3 hover:text-[#95979d] border-b-2 border-transparent hover:border-green-400'
            href='#about_seller'
          >
            About the seller
          </a>
          <a
            className='py-3 hidden xl:inline-block  hover:text-[#95979d] border-b-2 border-transparent hover:border-green-400'
            href='#recommendations'
          >
            Recommendations
          </a>
          <a
            className='py-3 hidden xl:inline-block  hover:text-[#95979d] border-b-2 border-transparent hover:border-green-400'
            href='#faq'
          >
            FAQ
          </a>
          <a
            className='py-3 hover:text-[#95979d] border-b-2 border-transparent hover:border-green-400'
            href='#reviews'
          >
            Reviews
          </a>
        </div>
        <div className='lg:flex hidden items-center gap-x-3 text-2xl '>
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
                    <div className='w-[50px] h-[35px] flex justify-center items-center cursor-pointer border'>
                      <GiHamburgerMenu className=' text-gray-400  rounded-sm' />
                    </div>
                  }
                />
              </Space>
            </span>
          </Dropdown>

          <PopupCard
            title='Save to My first list'
            icon={
              <div className='w-[50px] h-[35px] flex justify-center items-center cursor-pointer border'>
                <FaHeart className='cursor-pointer text-gray-400' />
              </div>
            }
          />
          <div
            id='number-like'
            className='w-[50px] h-[35px] flex justify-center items-center relative cursor-pointer border text-xl'
          >
            323
          </div>

          <PopupCard
            title='Report this Gig'
            icon={
              <div className='w-[50px] h-[35px] flex justify-center items-center cursor-pointer border'>
                <AiFillFlag className='cursor-pointer text-gray-400' />
              </div>
            }
          />
          <PopupCard
            title='Share this Gig'
            icon={
              <div className='w-[50px] h-[35px] flex justify-center items-center cursor-pointer border'>
                <IoShareSocial className='cursor-pointer text-green-400' />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
