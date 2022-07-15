import React from 'react';
import FormRegister from './FormRegister/FormRegister';
import Lottie from "lottie-react";
import bgAnimate from "../../assets/bg-signup.json";

export const Register = () => {
  return <div className='container mx-auto my-5 flex justify-between border border-gray-500'>
    <div className='h-full w-9/12 border-r-2 border-gray-400 flex justify-center items-center'>
      <Lottie animationData={bgAnimate} loop={50} />
    </div>
    <FormRegister />
  </div>;
};
