import { Checkbox, Menu } from 'antd';
import { useState } from 'react';
import { SortWork } from './SortWork';

export const ServiceOptionSort = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (flag) => {
    console.log(flag);
    setVisible(flag);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const options = [
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>HTML & CSS</span>
          <span>(2345)</span>
        </div>
      ),
      value: 'HTML & CSS',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>PHP</span>
          <span>(4523)</span>
        </div>
      ),
      value: 'PHP',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>JavaScript</span>
          <span>(453)</span>
        </div>
      ),
      value: 'JavaScript',
    },
    {
      label: (
        <div className='flex gap-x-3 items-center'>
          <span className='text-lg font-semibold'>Other</span>
          <span>(23)</span>
        </div>
      ),
      value: 'Other',
    },
  ];

  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <h3 className='text-2xl font-semibold mb-3'>
                Programming language
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options}
                onChange={onChange}
              />
              <button className='text-green-500 my-2 font-semibold text-lg'>
                +5 more
              </button>
              <div className='w-full border'></div>
            </>
          ),
          key: '1',
        },
        {
          label: (
            <>
              <h3 className='text-2xl font-semibold mb-3'>
                Coding Expertise
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options}
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
                Service Includes
              </h3>
              <Checkbox.Group
                onClick={(e) => e.preventDefault()}
                options={options}
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
      title='Service Options'
      menu={menu}
    />
  );
};
