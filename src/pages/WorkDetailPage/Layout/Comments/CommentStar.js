import { Dropdown, Menu, Rate, Space } from 'antd';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { AiOutlineCheck } from 'react-icons/ai';
import { CommentStarLeft } from './CommentStarLeft';
import { CommentStarRight } from './CommentStarRight';

export const CommentStar = () => {
  const [recent, setRecent] = useState(false);
  const [relevant, setRelevant] = useState(false);
  const [sort, setSort] = useState('Most recent');
  const menu = (
    <Menu
      onClick={(e) => {
        if (e.key === '0') {
          setRecent(true);
          setRelevant(false);
          setSort('Most recent');
        } else if (e.key === '1') {
          setRecent(false);
          setRelevant(true);
          setSort('Most relevant');
        }
      }}
      items={[
        {
          label: (
            <div
              onClick={(e) => console.log(e)}
              className='flex items-center gap-x-3 py-1 px-2'
            >
              <span className={!recent ? 'w-[14px]' : ''}>
                {recent && <AiOutlineCheck />}
              </span>
              <span className='text-lg font-semibold'>
                Most recent
              </span>
            </div>
          ),
          key: '0',
        },
        {
          label: (
            <div className='flex items-center gap-x-3 py-1 px-2'>
              <span className={!relevant ? 'w-[14px]' : ''}>
                {relevant && <AiOutlineCheck />}
              </span>
              <span className='text-lg font-semibold'>
                Most relevant
              </span>
            </div>
          ),
          key: '1',
        },
      ]}
    />
  );
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-4'>
          <h3 className='text-2xl font-semibold'>53,054 Reviews</h3>
          <div className=' flex gap-x-2 items-center'>
            <Rate
              allowHalf
              defaultValue={2.5}
              className='leading-none'
            />
            <span className='text-[18px] leading-none font-semibold text-[#d7b618]'>
              4.9
            </span>
          </div>
        </div>

        <div>
          <div className='flex item-center gap-x-2'>
            <span className='text-lg'>Sort By</span>
            <div
              id='sort-recent'
              className='flex items-center gap-x-1'
            >
              <Dropdown
                placement='bottomRight'
                overlay={menu}
                trigger={['click']}
              >
                <span onClick={(e) => e.preventDefault()}>
                  <div className='cursor-pointer'>
                    <Space>
                      <span className='text-lg font-semibold'>
                        {sort}
                      </span>
                      <span className='text-lg flex items-center justify-center'>
                        <DownOutlined />
                      </span>
                    </Space>
                  </div>
                </span>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 lg:flex'>
        <CommentStarLeft />
        <CommentStarRight />
      </div>
    </div>
  );
};
