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
      <header className='p-4 text-gray-800 bg-white  fixed w-screen top-0'>
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
                <g fill='#0000006f'>
                  <path d='m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z'></path>
                </g>
                <g fill='#1dbf73'>
                  <path d='m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z'></path>
                </g>
              </svg>
            </NavLink>
            <div className='sm:flex hidden relative items-center ml-4 text-gray-800 border border-gray-400 rounded-sm'>
              <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button
                    type='submit'
                    title='Search'
                    className='p-1 focus:outline-none focus:ring'
                  >
                    <svg
                      fill='currentColor'
                      viewBox='0 0 512 512'
                      className='w-4 h-4 dark:text-gray-100'
                    >
                      <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                    </svg>
                  </button>
                </span>
                <input
                  type='search'
                  name='Search'
                  placeholder='Search...'
                  className='w-[250px] py-2 pl-10 pr-2 text-sm rounded-md  focus:outline-none'
                />
              </div>
              <button className='bg-green-500 text-white absolute cursor-pointer  inline-block top-0  px-3 right-0 bottom-0 font-semibold text-lg'>
                Search
              </button>
            </div>
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
              className='self-center px-4 py-3 rounded font-semibold hover:text-green-500 transition-all'
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
