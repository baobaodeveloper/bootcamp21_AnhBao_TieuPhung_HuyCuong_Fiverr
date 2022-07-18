import React, { useEffect } from 'react';
import Category from '../../components/category/Category';
import Marketplace from '../../components/Marketplace/Marketplace';
import Selling from '../../components/selling/Selling';
import Testimonial from '../../components/testimonial/Testimonial';
import Trusted from '../../components/trusted/Trusted';
import Hero from './../../components/hero/Hero';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../services/localStorageService';

export const HomePage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorageService.getUserLocal())
      navigate("/login");
  }, []) 
  
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


