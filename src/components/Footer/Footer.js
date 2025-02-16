import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGoogle,
    FaPhone
} from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import CreditCards from '../Images/website/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer =() => {
    return (
        <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* company section details */}
                    <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    // viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.2,
                        duration: 0.6
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Print It</h1>
                        <p className="text-small max-w-[300px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                        quidem eos.
                        </p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone />
                                9492765791
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                <FaMapLocation />
                                Hyderabad
                            </p>
                        </div>
                    </motion.div>
                    {/* Footer links details */}
                    <motion.div
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    // viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.4,
                        duration: 0.6
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-2 gap-3'>
                            {/* first column section */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            {/* second column section */}
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                    
                        </div>
                    </motion.div>
                    {/* Social links details */}
                    <motion.div 
                    initial={{opacity:0, y:100}}
                    whileInView={{opacity:1, y:0}}
                    // viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.6,
                        duration: 0.6
                    }}
                    className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Follow Us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebookF className='text-3xl hover:scale-105 duration-300'/>
                            <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                            <FaTwitter className='text-3xl hover:scale-105 duration-300'/>
                            <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        </div>
                        <div>
                            <h1 className='text-xl mb-2'>Payment Methods</h1>
                            <img src={CreditCards} alt='credit cards' className='w-[80%]' />
                        </div>
                    </motion.div>
                </div>

                {/* copyright section */}
                <motion.p
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                // viewport={{once: true, amount: 0.5}}
                transition={{
                    delay: 0.8,
                    duration: 0.6
                }}
                className='text-white text-center mt-8 pt-8 border-t-2'>
                    Copyright & copy; 2025 PrintIt. All rights reserved.
                </motion.p>
            </div>
        </div>
    )
}

export default Footer