import React from 'react';
import Category from '../../components/category/Category';
import Marketplace from '../../components/Marketplace/Marketplace';
import Selling from '../../components/selling/Selling';
import Testimonial from '../../components/testimonial/Testimonial';
import Trusted from '../../components/trusted/Trusted';
import Hero from './../../components/hero/Hero';

export const HomePage = () => {
  return (
    <div className='h-full w-full'>
      <Hero />
      <Trusted />
      <Category />
      <Selling />
      <Testimonial />
      <Marketplace />
    </div>
  );
};


