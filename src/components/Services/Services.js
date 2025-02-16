import React from 'react';
import { delay, motion } from 'framer-motion';
import Coffee1 from '../Images/services/coffee1.png';
import Coffee3 from '../Images/services/coffee3.png';
import HomeDecor from '../Images/services/home_decor.png';
import Name from '../Images/services/name.png';
import Gaming from '../Images/services/gaming.png';

const servicesData = [
  {
    id: 1,
    image: Name,
    title: "Customized Keychains",
    subtile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    image: Gaming,
    title: "Gaming Accessories",
    subtile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    image: HomeDecor,
    title: "Home Decor",
    subtile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

const cardVariants = {
  hidden: {opacity:0, y: 20},
  visible: {
    opacity: 1,
    y:0,
    transition: {
      type:'spring',
      stiffness: 150,
      damping: 10,
      ease: 'easeInOut',
    }
  }
};

const containerVariants = {
  hidden: {opacity:1},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, //delay between children/animations
    }
  }
};

function Services() {
  return (
    <div className='container my-16 space-y-4 '>
      {/* header section */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1 
        initial={{opacity:0, y:100 }}
        whileInView={{opacity:1, y:0}}
        transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.2
        }}
        className='text-3xl font-bold text-lightGray'>Popular <span className='text-primary'>3D Printed </span>Items</motion.h1>
        <motion.p 
        initial={{opacity:0, scale: 0.5 }}
        whileInView={{opacity:1, scale:1}}
        transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.6
        }}
        className='text-sm opacity-50 '>Duis Lorem eu laborum aliquip quis ullamco duis. Irure culpa non elit eiusmod. Velit pariatur ipsum sit consectetur aliqua qui. 
          Eu occaecat enim magna cupidatat et id. Enim excepteur elit consectetur quis magna duis eu in labore occaecat consectetur esse aute consequat.
           Ea reprehenderit dolore esse aliqua.</motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.8}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
          <motion.div
          variants={cardVariants}
          className='text-center p-4 space-y-6'>
            <motion.img
            src={service.image}
            className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'
            alt="" />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
              <p className='text-darkGray'>{service.subtile}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services