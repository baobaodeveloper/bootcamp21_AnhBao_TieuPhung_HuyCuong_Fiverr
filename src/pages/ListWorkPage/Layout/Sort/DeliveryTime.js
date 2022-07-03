import { Menu } from 'antd';
import { useState } from 'react';
import { SortWork } from './SortWork';
import { Radio } from 'antd';

export const DeliveryTime = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(1);

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div id='delivery-time'>
              <Radio.Group
                size='large'
                onChange={onChange}
                value={value}
              >
                <Radio value={1}>Express 24H</Radio>
                <Radio value={2}>Up to 3 days</Radio>
                <Radio value={3}>Up to 7 days</Radio>
                <Radio value={4}>Any time</Radio>
              </Radio.Group>
              <div className='border my-5'></div>
            </div>
          ),
          key: 'Radio',
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
      title='Delivery Time'
      menu={menu}
    />
  );
};
