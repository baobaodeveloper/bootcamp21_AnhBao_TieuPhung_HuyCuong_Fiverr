import React from 'react';
import { Pagination } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { SUCCESS } from '../../../../constants/globalVariable';
import { CardWork } from '../../../ListWorkPage/Layout/ListWork/CardWork';
import { CardBuying } from './CardBuying';
import { bookingApi } from '../../../../services/bookingService';

export const UserBuying = () => {
  const [page, setPage] = useState(0);
  const [listWorkBuyingDivide, setListWorkBuyingDivide] = useState(
    []
  );
  const [listWorkBuying, setListWorkBuying] = useState([]);
  useEffect(() => {
    const fetchListBooking = async () => {
      try {
        const res = await bookingApi.getBookingList();
        if (res.status === SUCCESS) {
          const { data } = res;
          setListWorkBuying(data.bookingJob);

          const chunkSize = 4;
          let dataDivide = [];
          for (
            let i = 0;
            i < data.bookingJob.length;
            i += chunkSize
          ) {
            dataDivide.push(data.bookingJob.slice(i, i + chunkSize));
          }
          setListWorkBuyingDivide(dataDivide);
        }
      } catch (error) {
        console.log('Failed fetch data', error);
      }
    };
    fetchListBooking();
  }, []);
  return (
    <>
      <div>
        <div className='xl:grid xl:grid-cols-2 gap-8 hidden'>
          {listWorkBuyingDivide.length > 0 &&
            listWorkBuyingDivide[page].map((work, i) => {
              return <CardWork key={i} work={work} />;
            })}
        </div>
        <div
          id='pagination-list-work'
          className='xl:flex justify-center items-center mt-10 hidden'
        >
          <Pagination
            onChange={(value) => setPage(value - 1)}
            showSizeChanger={false}
            defaultCurrent={1}
            pageSize={1}
            total={listWorkBuyingDivide.length}
          />
        </div>
      </div>
      <div className='xl:hidden flex flex-col gap-y-3 max-h-[450px] overflow-scroll'>
        {listWorkBuying.length > 0 &&
          listWorkBuying.map((work, i) => {
            return <CardBuying key={i} work={work} />;
          })}
      </div>
    </>
  );
};
