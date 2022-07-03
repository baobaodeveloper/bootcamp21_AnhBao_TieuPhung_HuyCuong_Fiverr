import { Menu, InputNumber } from 'antd';
import { useState } from 'react';
import { SortWork } from './SortWork';
import { BiDollar } from 'react-icons/bi';

export const Budget = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <div
                id='input-rangeMoney'
                className='flex justify-between gap-y-3 gap-x-3 w-[350px] p-4'
              >
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold text-gray-600'>
                    MIN.
                  </h4>
                  <InputNumber
                    size='large'
                    status='min'
                    controls={false}
                    addonAfter={<BiDollar />}
                    onChange={onChange}
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-xl font-semibold text-gray-600'>
                    MAX.
                  </h4>
                  <InputNumber
                    size='large'
                    status='max'
                    controls={false}
                    addonAfter={<BiDollar />}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className='w-full border my-4'></div>
            </>
          ),
          key: '1',
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
      title='Budget'
      menu={menu}
    />
  );
};
