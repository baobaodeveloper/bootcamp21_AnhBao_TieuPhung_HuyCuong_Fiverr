import React from 'react';
import CategorySort from './CategorySort';
import { ServiceOptionSort } from './ServiceOptionSort';

export const LeftSort = () => {
  return (
    <div>
      <CategorySort />
      <ServiceOptionSort />
    </div>
  );
};
