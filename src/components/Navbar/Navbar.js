import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from 'framer-motion'

const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 right-20 w-full pt-10 text-white z-4000'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                {/* logo section */}
                <motion.h1
                initial={{opacity:0, y:-100 }}
                animate={{opacity:1, y: 0}}
                transition={{
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.2
                }}
                className='text-2xl font-semibold'>
                    <span className='text-primary'>Print</span>
                 It
                </motion.h1>
                {/* menu section */}
                <motion.div
                initial={{opacity:0, y:-100 }}
                animate={{opacity:1, y: 0}}
                transition={{
                    type:"spring",
                    stiffness:100,
                    damping:10,
                    delay:0.2
                }}
                onClick={() => setSidebar(!sidebar)}
                >
                    <GiHamburgerMenu className='text-3xl cursor-pointer'></GiHamburgerMenu>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar