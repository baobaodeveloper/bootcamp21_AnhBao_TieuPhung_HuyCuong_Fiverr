import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiEarthLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Drawer } from 'antd';
import ButtonGreen from '../../../../components/button/ButtonGreen';

export const HeaderTemplate = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer
        title={<ButtonGreen title='Join Fiverr' path='/register' />}
        placement='left'
        closable={false}
        onClose={onClose}
        visible={visible}
        key='left'
        width='250px'
      >
        <div className='flex flex-col gap-y-3'>
          <NavLink
            to='/login'
            className='text-gray-700 text-xl font-semibold '
          >
            Sign In
          </NavLink>
          <NavLink
            to='/'
            className='text-gray-700 text-xl font-semibold '
          >
            Browser Categories
          </NavLink>
          <NavLink
            to='/'
            className='text-gray-700 text-xl font-semibold '
          >
            Explore
          </NavLink>
          <NavLink
            to='/'
            className='text-green-400 text-xl font-semibold'
          >
            Fiverr Business
          </NavLink>
        </div>
        <p className='text-black text-lg py-3 font-semibold border-b my-10'>
          General
        </p>
        <div className='flex flex-col gap-y-4'>
          <NavLink
            to='/login'
            className='text-gray-700 text-xl font-semibold '
          >
            Home
          </NavLink>
          <NavLink
            to='/'
            className='text-gray-700 text-xl font-semibold '
          >
            Browser Categories
          </NavLink>
          <NavLink
            to='/'
            className=' text-gray-700 flex items-center text-xl font-semibold  gap-x-2 '
          >
            <span>English</span>
            <RiEarthLine />
          </NavLink>
          <NavLink
            to='/'
            className='text-gray-700 text-xl font-semibold'
          >
            US$ USD
          </NavLink>
          <NavLink
            to='/'
            className='text-gray-700 text-xl font-semibold'
          >
            Open in App
          </NavLink>
        </div>
      </Drawer>
      <header className='p-4 text-white bg-transparent fixed w-screen top-0'>
        <div className='container flex justify-between items-center h-16 mx-auto'>
          <div className='flex items-center'>
            <button
              onClick={() => showDrawer()}
              className='p-4 sm:hidden text-3xl font-semibold mt-1 cursor-pointer'
            >
              <GiHamburgerMenu />
            </button>
            <NavLink to='/' className='flex items-center p-2'>
              <svg
                width='89'
                height='27'
                viewBox='0 0 89 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g fill='#fff'>
                  <path d='m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z'></path>
                </g>
                <g fill='#1dbf73'>
                  <path d='m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z'></path>
                </g>
              </svg>
            </NavLink>
          </div>
          <ul className='items-stretch lg:flex hidden space-x-3  ml-auto'>
            <li className='flex text-xl font-semibold'>
              <NavLink
                to='/'
                className='flex items-center px-4 hover:text-green-500 transition-all'
              >
                Feverr Business
              </NavLink>
            </li>
            <li className='flex text-xl font-semibold'>
              <NavLink
                to='/'
                className='flex items-center px-4 hover:text-green-500 transition-all'
              >
                Explore
              </NavLink>
            </li>

            <li className=' text-xl font-semibold xl:flex hidden'>
              <NavLink
                to='/'
                className='flex items-center px-4 gap-x-2 hover:text-green-500 transition-all'
              >
                <RiEarthLine />
                <span>English</span>
              </NavLink>
            </li>

            <li className=' text-xl font-semibold xl:flex hidden'>
              <NavLink
                to='/'
                className='flex items-center  px-4 hover:text-green-500 transition-all'
              >
                US$ USD
              </NavLink>
            </li>

            <li className='flex text-xl font-semibold'>
              <NavLink
                to='/'
                className='flex items-center px-4 hover:text-green-500 transition-all'
              >
                Become a Seller
              </NavLink>
            </li>
          </ul>
          <div className='items-center flex-shrink-0  text-xl'>
            <NavLink
              to='/login'
              className='self-center px-4 py-3 rounded font-semibold hover:text-white'
            >
              Sign in
            </NavLink>
            <NavLink
              to='/register'
              className='self-center px-6 py-1 font-semibold border-2 border-white rounded-md hover:text-white hover:bg-green-400 transition-colors duration-300 hover:border-green-400'
            >
              Join
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};
