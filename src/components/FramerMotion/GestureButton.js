import React from 'react';
import { motion } from 'framer-motion';


function GestureButton() {
  return (
    <div className="flex justify-center mt-10">
      <motion.button 
      whileHover={{//this animation happens when this hover gesture is performed
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9
      }}
      className='bg-white p-2 rounded-full w-44 text-black hover:bg-gray-200'>Submit</motion.button>
    </div>
  )
}

export default GestureButton
