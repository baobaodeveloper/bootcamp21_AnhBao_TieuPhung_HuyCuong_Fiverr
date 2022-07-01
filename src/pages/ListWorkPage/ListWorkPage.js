import React from 'react';
import { LeftSort } from './Layout/LeftSort';
import { RightSort } from './Layout/RightSort';

export const ListWorkPage = () => {
  return (
    <div className='container mx-auto py-10 '>
      <h2 className='text-4xl font-semibold'>Results for 'html'</h2>
      <div className='flex justify-between'>
        <LeftSort />
        <RightSort />
      </div>
    </div>
  );
};
