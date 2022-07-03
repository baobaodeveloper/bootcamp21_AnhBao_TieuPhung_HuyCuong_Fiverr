import React from 'react';
import { CardWork } from './CardWork';

export const TopRated = () => {
  return (
    <div className='bg-[#F5F5F5] p-[42px_32px_16px] rounded-md'>
      <div className='flex items-center gap-x-5 '>
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/fiverr-choice-icon.f768f0e.svg'
          alt='Fiverr Choice'
        />
        <h3 className='text-[#404145] xl:text-3xl md:text-xl text-lg font-semibold'>
          Services that people loved for superb work and delivery
        </h3>
      </div>

      <section className='text-gray-600 body-font'>
        <div className='container py-8 mx-auto'>
          <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 md:p-0 p-8'>
            <CardWork />
            <CardWork />
            <CardWork />
            <CardWork />
          </div>
        </div>
      </section>
    </div>
  );
};
