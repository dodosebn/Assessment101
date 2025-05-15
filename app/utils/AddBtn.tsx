import React from 'react'
import { FaOpencart } from "react-icons/fa6";

const AddBtn = () => {
  return (
    <button className='
      border-none 
      bg-cyan-600 
      text-white font-medium
      px-4 py-2 
      rounded-md
      shadow-md hover:shadow-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2
      inline-flex
    '>
   <FaOpencart />  Add cart
    </button>
  )
}

export default AddBtn;