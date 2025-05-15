import React from 'react'
import TransitionLink from './transistionLink'
const LearnBtn = () => {
  return (
      <button className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
         <TransitionLink href='/about'>     Learn More</TransitionLink>  
              </button>
  )
}

export default LearnBtn
