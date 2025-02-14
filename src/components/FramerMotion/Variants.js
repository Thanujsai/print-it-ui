import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';


const Variant1 = {
  "show": {//show is a block and it contains different css properties that i want to animate
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren:0.3,//children will come one by one after the parent item
    }
  },
  "hide": {
    opacity: 0,
    transition: {
      when: "afterChildren",//first children item will be hidden i.e. emojis then actual item i.e. the box
    }
  }
};

const Variant2 ={
  "show": {
    opacity: 1,
    x: 0,
  },
  "hide": {
    opacity: 0,
    x: -100,
  }
}
//variants will be able to propagate the set of animations through dom
function Variants() {
  const [showEmojis, setShowEmojis] = useState(false);
  return (
    <div>
      <motion.div
      animate ={showEmojis ? "show": "hide"}//this animation/variants propagates to all child elements
      className='mt-10 flex flex-col items-center space-y-6 justify-center'>
      <motion.div 
      variants={Variant1}
      className="flex rounded-full p-4 items-center text-2xl justify-evenly w-64 h-12 bg-white">{/*whenever you want to show emojis use show variant other hide variant */}
        {/*some emojis*/}
        <motion.span variants={Variant2} className="bg-transparent">❤️</motion.span>
        <motion.span variants={Variant2} className="bg-transparent">💬</motion.span>
        <motion.span variants={Variant2} className="bg-transparent">😀</motion.span>
        <motion.span variants={Variant2} className="bg-transparent">👍</motion.span>
        <motion.span variants={Variant2} className="bg-transparent">🚀</motion.span>
      </motion.div>
      <button className='bg-sky-500 text-white cursor-pointer font-semibold p-4 px-8 py-2 rounded-md' onClick={() => setShowEmojis(!showEmojis)}>
        
        {!showEmojis ? "Show emojis" : "Hide Emojis"}
        
        </button>
      </motion.div>
    </div>
  )
}

export default Variants