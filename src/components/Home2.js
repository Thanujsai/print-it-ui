import React, { useState } from 'react';
import CoffeeMain from './Images/lamp.png';
import Navbar from './Navbar/Navbar';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const bgImage = {
    backgroundImage: `url('/src-images/bg-slate.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",  // Ensure it takes full viewport height
    width: "100vw",    // Ensure full viewport width
}
function Home2() {
    const [sidebar, setSidebar] = useState(false);
  return (
    <main style={bgImage}>
        <section className='relative'>
            <div className='container'>
                {/* Navbar section */}
                <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
                {/* Hero section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
                {/* text content section */}
                <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <motion.h1 
                    initial={{opacity:0, y:-100 }}
                    whileInView={{opacity:1, y:0}}//if you dont want the animations to come again and again whenever this component comes in view, chagne whileInView to animate
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1
                    }}
                     className='text-7xl font-bold leading-tight ml-14'>Your Ideas, Printed</motion.h1>
                    <motion.div
                    initial={{opacity:0, y:100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:1.2
                    }}
                    className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>3D Model Lovers,</h1>
                            <h1 className='text-sm opacity-55 leading-loose'>
                                Ea sit ex laboris cupidatat proident ex. Labore in nulla cupidatat elit reprehenderit. Commodo labore dolor adipisicing reprehenderit ullamco excepteur ipsum dolor labore sint veniam mollit aliquip duis. Magna nulla dolor nostrud exercitation adipisicing aliquip officia anim.
                            </h1>
                        </div>
                        <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                    </motion.div>
                </div>
                {/* Hero Image Section */}
                <div className='relative'>
                    <motion.img 
                    initial={{opacity:0, scale:0 }}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:0.4
                    }}
                    src={CoffeeMain} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow'></motion.img>
                    {/* orange circle ring */}
                    <motion.div
                    initial={{opacity:0, y:100 }}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        type:"spring",
                        stiffness:100,
                        damping:10,
                        delay:0.8
                    }}
                    className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></motion.div>
                    {/* big text section */}
                    <motion.div
                        initial={{opacity:0, x:-100 }}
                        whileInView={{opacity:1, x:0}}
                        transition={{
                            type:"spring",
                            stiffness:100,
                            damping:10,
                            delay:0.8
                        }}
                        className='absolute -top-0 left-[400px] z-[1]'>
                        <h1 className='text-[140px] scale-150 font-bold text-darkGray/30 leading-none'>Print It</h1>
                    </motion.div>
                </div>
                {/* third div section */}
                <motion.div 
                initial={{opacity:0, y:100 }}
                whileInView={{opacity:1, y:0}}
                transition={{
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:1.2
                }}
                className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Print It</h1>
                    <div className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>Explore 3D Prints</h1>
                            <h1 className='text-sm opacity-55 leading-loose'>
                                Ea sit ex laboris cupidatat proident ex. Labore in nulla cupidatat elit reprehenderit. Commodo labore dolor adipisicing reprehenderit ullamco excepteur ipsum dolor labore sint veniam mollit aliquip duis. Magna nulla dolor nostrud exercitation adipisicing aliquip officia anim.
                            </h1>
                        </div>
                        <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50'></div>
                    </div>
                </motion.div>
                <div></div>
                </div>
            </div>
            {/* sidebar menu section */}
            {sidebar && (<motion.div
            initial={{x:'100%'}}
            whileInView={{x:0}}
            className='absolute top-0 right-0 w-[140px] h-[100vh] bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop:blur-sm z-10'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-6 text-white'>
                        {/* line */}
                        <div className='w-[1px] h-[70px] bg-white'></div>
                        {/* social icons */}
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                            <FaFacebookF className='text-2xl'/>
                        </div>
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                            <FaTwitter className='text-2xl'/>
                        </div>
                        <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                            <FaInstagram className='text-2xl'/>
                        </div>
                        <div className='w-[1px] h-[70px] bg-white'></div>
                    </div>
                </div>
            </motion.div>)}
            
        </section>
    </main>
  )
}

export default Home2