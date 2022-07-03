import { Checkbox, Menu } from 'antd';
import { useState } from 'react';
import { SortWork } from './SortWork';

export const SellerDetallSort = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const options = [
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>
            Top Rate Seller
          </span>
          <span>(2345)</span>
        </div>
      ),
      value: 'Top Rate Seller',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Level Two</span>
          <span>(4523)</span>
        </div>
      ),
      value: 'Level Two',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Level One</span>
          <span>(453)</span>
        </div>
      ),
      value: 'Level One',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>New Seller</span>
          <span>(23)</span>
        </div>
      ),
      value: 'New Seller',
    },
  ];
  const options1 = [
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Vietnamese</span>
          <span>(2345)</span>
        </div>
      ),
      value: 'Vietnameser',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>English</span>
          <span>(4523)</span>
        </div>
      ),
      value: 'English',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Urdu</span>
          <span>(453)</span>
        </div>
      ),
      value: 'Urdu',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Hindi</span>
          <span>(23)</span>
        </div>
      ),
      value: 'Hindi',
    },
  ];
  const options2 = [
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>United State</span>
          <span>(2345)</span>
        </div>
      ),
      value: 'United State',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>
            United Kingdom
          </span>
          <span>(4523)</span>
        </div>
      ),
      value: 'United Kingdom',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Canada</span>
          <span>(453)</span>
        </div>
      ),
      value: 'Canada',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Germany</span>
          <span>(23)</span>
        </div>
      ),
      value: 'Germany',
    },
  ];

  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <h3 className='text-2xl font-semibold mb-3'>
                Seller Level
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options}
                onChange={onChange}
              />

              <div className='w-full border my-4'></div>
            </>
          ),
          key: '1',
        },
        {
          label: (
            <>
              <h3 className='text-2xl font-semibold mb-3'>
                Seller Speaks
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options1}
                onChange={onChange}
              />
              <button className='text-green-500 my-2 font-semibold text-lg'>
                +5 more
              </button>
              <div className='w-full border'></div>
            </>
          ),
          key: '2',
        },
        {
          label: (
            <>
              <h3 className='text-2xl font-semibold mb-3'>
                Seller Live In
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options2}
                onChange={onChange}
              />

              <div className='w-full border mt-3'></div>
            </>
          ),
          key: '3',
        },
        {
          label: (
            <div className='flex justify-between items-center'>
              <button className='text-xl font-semibold hover:text-green-400 transition-all'>
                Clear All
              </button>
              <button className='text-xl font-semibold text-white py-1 px-3 bg-green-400 rounded-lg leading-1 pb-2'>
                Apply
              </button>
            </div>
          ),
          key: '0',
        },
      ]}
    />
  );
  return (
    <SortWork
      handleVisibleChange={handleVisibleChange}
      visible={visible}
      title='Seller Detalls'
      menu={menu}
    />
  );
};
