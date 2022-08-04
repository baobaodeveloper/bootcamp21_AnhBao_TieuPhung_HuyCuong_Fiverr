import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useSelector } from 'react-redux';

export const SortByRelevance = () => {
  const { lengthListWork } = useSelector(
    (state) => state.listWorkPageReducer
  );
  const [arrow, setArrow] = useState(false);
  return (
    <div className='flex justify-between items-center mt-3 mb-8 text-lg text-[#74767e]'>
      <span>{lengthListWork} services available</span>
      <div>
        <Dropdown
          overlayClassName='sort-relevance'
          overlayStyle={{ minWidth: '250px' }}
          trigger={'click'}
          overlay={
            <Menu
              items={[
                {
                  key: 'Best Selling',
                  label: (
                    <span className='text-xl text-[#202021] font-semibold'>
                      Best Selling
                    </span>
                  ),
                },
                {
                  key: 'Newest Arrivals',
                  label: (
                    <span className='text-[#202021] font-semibold text-xl'>
                      Newest Arrivals
                    </span>
                  ),
                },
              ]}
            />
          }
          placement='bottomLeft'
        >
          <button
            className='flex items-center gap-x-2'
            onClick={() => setArrow(!arrow)}
          >
            <span>Sort by</span>
            <span className='text-[#202021] font-semibold'>
              Relevance
            </span>
            <span className='mb-1'>
              {arrow ? <DownOutlined /> : <UpOutlined />}
            </span>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};
