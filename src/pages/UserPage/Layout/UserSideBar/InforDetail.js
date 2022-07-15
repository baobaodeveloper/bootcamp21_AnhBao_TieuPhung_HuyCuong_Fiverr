import React from 'react';
import { AvatarUser } from './AvatarUser';
import { Description } from './Description';
import { Language } from './Language';
import { LinkedAccount } from './LinkedAccount';
import { Skill } from './Skill';
import { Certification } from './Certification';

export const InforDetail = () => {
  return (
    <div className='flex flex-col gap-y-8 w-full'>
      <AvatarUser />

      <div className='flex flex-col w-full p-[30px] bg-white border rounded-sm border-[#dadbdd]'>
        <Description />
        <Language />
        <LinkedAccount />
        <Skill />
        <Certification />
      </div>
    </div>
  );
};
