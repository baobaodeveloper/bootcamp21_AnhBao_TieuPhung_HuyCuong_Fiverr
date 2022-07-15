import React from 'react';
import { UserContent } from './Layout/UserContent';
import { UserSidebar } from './Layout/UserSideBar/UserSidebar';

export const UserPage = () => {
  return (
    <div className='bg-[#f7f7f7]'>
      <div className='container mx-auto p-20 flex justify-between'>
        <UserSidebar />
        <UserContent />
      </div>
    </div>
  );
};
