import React from 'react'
import appStore from '../Images/website/app_store.png';
import playStore from '../Images/website/play_store.png';
import coffeeCover from '../Images/website/coffee-cover.jpg';
import { motion } from 'framer-motion';

const BannerStyle = {
    backgroundImage: `url(${coffeeCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",  // Ensure it takes full viewport height
    width: "100%",    // Ensure full viewport width
}
const AppBanner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
            <div className='space-y-6 max-w-xl mx-16'>
                <motion.h1
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay:0.2,
                }}
                className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</motion.h1>

                <motion.p 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay:0.3,
                }}
                className='text-center sm:px-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
            {/* images link */}
            <div
            className='flex justify-center items-center gap-4'>
                <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                    <motion.img
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 10,
                        delay:0.4,
                    }}
                    src={appStore} alt="" />
                </a>
                <a href='#' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                <motion.img
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        type:"spring",
                        stiffness: 100,
                        damping: 10,
                        delay:0.5,
                    }}
                    src={playStore} alt="" />
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner