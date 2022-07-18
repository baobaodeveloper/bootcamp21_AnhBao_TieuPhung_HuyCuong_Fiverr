import React, { useEffect } from 'react';
import FormLogin from './FormLogin/FormLogin';
import Lottie from "lottie-react";
import bgAnimate from "../../assets/bg-login.json";
import { localStorageService } from '../../services/localStorageService';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorageService.getUserLocal()) {
      navigate("/");
    }
  }, [])
  
  return <div className='container mx-auto my-5 flex justify-between border border-gray-500'>
    <div className='h-full w-9/12 border-r-2 border-gray-400 flex justify-center items-center'>
      <Lottie animationData={bgAnimate} loop={50} />
    </div>
    <FormLogin />
  </div>;
};


