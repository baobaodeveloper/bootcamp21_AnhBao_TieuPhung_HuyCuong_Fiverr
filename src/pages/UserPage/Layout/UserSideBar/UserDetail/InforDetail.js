import React from 'react';
import { Description } from './Description';
import { Language } from './Language';
import { LinkedAccount } from './LinkedAccount';
import { Skill } from './Skill';

export const InforDetail = () => {
  return (
    <div className='flex flex-col w-[400px] p-[30px] bg-white border rounded-sm border-[#dadbdd]'>
      <Description />
      <Language />
      <LinkedAccount />
      <Skill />
    </div>
  );
};
