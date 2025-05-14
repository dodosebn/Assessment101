import React from 'react';
import { NavClicksProps } from '../types';

const NavClicks: React.FC<NavClicksProps> = ({ name, icon: Icon }) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group'>
      <div className='p-2 rounded-full hover:bg-gray-100 transition'>
        <Icon className='text-2xl text-gray-600 group-hover:text-cyan-500' />
      </div>
      <div className='text-xs text-gray-500 group-hover:text-cyan-500 mt-1'>{name}</div>
    </div>
  );
};

export default NavClicks;