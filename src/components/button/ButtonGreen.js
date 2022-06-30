import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonGreen = ({ title, path }) => {
  return (
    <NavLink
      to={path}
      className='bg-green-400 py-2 px-4 text-white rounded-lg'
    >
      {title}
    </NavLink>
  );
};

export default ButtonGreen;
