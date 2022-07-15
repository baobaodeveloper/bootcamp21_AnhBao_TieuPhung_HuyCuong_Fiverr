import React from 'react';
import { CardWork } from '../../../ListWorkPage/Layout/ListWork/CardWork';
import { CardBuying } from './CardBuying';

export const UserBuying = () => {
  return (
    <>
      <div className='xl:grid xl:grid-cols-2 gap-8 hidden'>
        <CardWork />
        <CardWork />
        <CardWork />
        <CardWork />
      </div>
      <div className='xl:hidden flex flex-col gap-y-3'>
        <CardBuying />
        <CardBuying />
        <CardBuying />
      </div>
    </>
  );
};
