import React from 'react';
import { Budget } from './Budget';
import { CategorySort } from './CategorySort';
import { DeliveryTime } from './DeliveryTime';
import { SellerDetallSort } from './SellerDetallSort';
import { ServiceOptionSort } from './ServiceOptionSort';

export const LeftSort = () => {
  return (
    <div className='flex flex-wrap gap-3 my-10'>
      <CategorySort />
      <ServiceOptionSort />
      <SellerDetallSort />
      <Budget />
      <DeliveryTime />
    </div>
  );
};
