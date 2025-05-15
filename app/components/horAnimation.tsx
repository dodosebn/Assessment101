import React from 'react';
import { AnimationItems } from './folderMaps';


const duplicatedItems = [...AnimationItems, ...AnimationItems];

const HorAnimation = () => {
  return (
    <div className='bg-white shadow-sm overflow-hidden'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-3'>
        <div className='relative overflow-hidden'>
          <div className='animate-infinite-scroll whitespace-nowrap'>
            <ul className='inline-flex gap-6 md:gap-8 items-center'>
              {duplicatedItems.map((item, ndx) => (
                <li 
                  key={ndx} 
                  className='inline-flex items-center'
                >
                  <span className='inline-block px-3 py-1.5 bg-gray-50 rounded-full text-sm md:text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'>
                    {item}
                  </span>
                  {ndx < duplicatedItems.length - 1 && (
                    <span className='text-gray-200 mx-1 md:mx-2 text-xl'>•</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Gradient fade effects on sides */}
          <div className='absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10'></div>
          <div className='absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10'></div>
        </div>
      </div>
    </div>
  );
};

export default HorAnimation;