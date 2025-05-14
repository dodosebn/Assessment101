import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <span className='text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent'>
        WENA
      </span>
      <span className='ml-1 text-sm font-light text-gray-600 hidden sm:inline'>
        AFFILIATE
      </span>
    </div>
  )
}

export default Logo;