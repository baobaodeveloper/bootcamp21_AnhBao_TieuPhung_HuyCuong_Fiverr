import React from 'react';
import { Switch } from 'antd';

export const RightSort = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className='flex items-center gap-x-5'>
      <div id='switch-sort' className='flex items-center gap-x-2'>
        <Switch defaultChecked onChange={onChange} />
        <span className='text-xl font-semibold'>Pro services</span>
      </div>
      <div id='switch-sort' className='flex items-center gap-x-2'>
        <Switch defaultChecked onChange={onChange} />
        <span className='text-xl font-semibold'>Local sellers</span>
      </div>
      <div id='switch-sort' className='flex items-center gap-x-2'>
        <Switch defaultChecked onChange={onChange} />
        <span className='text-xl font-semibold'>Online sellers</span>
      </div>
    </div>
  );
};
