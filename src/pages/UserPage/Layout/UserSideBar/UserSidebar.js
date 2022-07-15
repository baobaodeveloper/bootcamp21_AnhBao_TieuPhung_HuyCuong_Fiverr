import React from 'react';
import { InforBasic } from './InforBasic';
import { InforDetail } from './UserDetail/InforDetail';

export const UserSidebar = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <InforBasic />
      <InforDetail />
    </div>
  );
};
