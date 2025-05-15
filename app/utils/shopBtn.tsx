import React from 'react'
import TransitionLink from './transistionLink';

const ShopBtn = () => {
  return (
       <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-md text-sm md:text-base">
              <TransitionLink href='/product'>Shop Now</TransitionLink>  
              </button>
  
  )
}

export default ShopBtn;
