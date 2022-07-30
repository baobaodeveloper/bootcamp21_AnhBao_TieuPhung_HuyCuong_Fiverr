import React, { useEffect } from 'react';
import FormLogin from './FormLogin/FormLogin';
import Lottie from "lottie-react";
import bgAnimate from "../../assets/bg-login.json";
import { localStorageService } from '../../services/localStorageService';
import { useNavigate } from 'react-router-dom';

import "./LoginPage.scss";

export const LoginPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorageService.getUserLocal()) {
      navigate("/");
    }
  }, [])

  return (
    <div className='login'>
      <div className='lottie-img'>
        <Lottie animationData={bgAnimate} loop={50} />
      </div>
      <div className='login__form'>
        <FormLogin />
      </div>
    </div>
  );
};



