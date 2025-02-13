import React from 'react';
import { delay, motion } from 'framer-motion';

function ProgressBar() {
  return (
    <>
    <h1>Progress Bar</h1>
    <div className="mt-6">
      <div className="w-full h-2 rounded bg-white">
        <motion.div 
        animate = {{
            width: "100%",
            /* rotateZ: [100,200] */
        }}//we want the width to be 100%
        transition ={{duration: 10}}//this means that the transition must happen in 10 seconds
        className="w-1/12 h-full bg-cyan-300"></motion.div>
      </div>
    </div>
    </>
  )
}

export default ProgressBar
