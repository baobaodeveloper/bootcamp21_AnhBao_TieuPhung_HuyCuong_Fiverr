import React from 'react';
import { CardWork } from './CardWork';
import { TopRated } from './TopRated';
import { Pagination } from 'antd';

export const ListWork = () => {
  return (
    <div>
      <TopRated />

      <section className='text-gray-600 body-font'>
        <div className='container py-14 mx-auto'>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:p-0 p-8'>
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
          </div>

          <div
            id='pagination-list-work'
            className='flex justify-center items-center mt-10'
          >
            <Pagination
              showSizeChanger={false}
              defaultCurrent={6}
              pageSize={12}
              total={120}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
