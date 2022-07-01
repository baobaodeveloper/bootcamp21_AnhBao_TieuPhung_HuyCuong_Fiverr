import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

export const ButtonDefault = ({ arrow, title }) => {
  return (
    <button className='h-[50px] px-4 border-2 border-gray-500 rounded-lg flex items-center gap-x-2'>
      <span className='text-lg font-semibold h-full flex items-center '>
        {title}
      </span>
      {arrow ? <DownOutlined /> : <UpOutlined />}
    </button>
  );
};
