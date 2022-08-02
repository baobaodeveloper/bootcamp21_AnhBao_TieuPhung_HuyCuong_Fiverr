import React, { useState } from 'react';
import { CardWork } from './CardWork';
import { TopRated } from './TopRated';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

export const ListWork = () => {
  const [page, setPage] = useState(0);
  const { typeJob } = useParams();
  const { listWork } = useSelector(
    (state) => state.listWorkPageReducer
  );

  return (
    <div>
      <TopRated />

      <section className='text-gray-600 body-font'>
        {listWork.length > 0 ? (
          <div className='container py-14 mx-auto'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
              {listWork[page] &&
                listWork[page].length > 0 &&
                listWork[page].map((work, i) => {
                  return <CardWork work={work} key={i} />;
                })}
            </div>

            <div
              id='pagination-list-work'
              className='flex justify-center items-center mt-10'
            >
              <Pagination
                onChange={(value) => setPage(value - 1)}
                showSizeChanger={false}
                defaultCurrent={1}
                pageSize={1}
                total={listWork.length}
              />
            </div>
          </div>
        ) : (
          <section className='flex items-center h-full p-16 '>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
              <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-6xl '>
                  <span className='sr-only'>Error</span>Not Found
                </h2>
                <p className='text-2xl font-semibold md:text-3xl'>
                  Sorry, we couldn't find "{typeJob}".
                </p>
                <p className='mt-4 mb-8 '>
                  But dont worry, you can find plenty of other things
                  on our homepage.
                </p>
                <Link
                  to={'/'}
                  className='px-8 h-[40px] bg-blue-500 text-white text-xl font-semibold rounded leading-none inline-flex justify-center items-center'
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};
