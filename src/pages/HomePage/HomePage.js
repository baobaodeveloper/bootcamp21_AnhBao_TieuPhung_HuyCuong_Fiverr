import React from 'react';
import Category from '../../components/category/Category';
import Selling from '../../components/selling/Selling';
import Trusted from '../../components/trusted/Trusted';
import Hero from './../../components/hero/Hero';

export const HomePage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <Trusted />
      <Category />
      <Selling />
    </div>
  );
};


