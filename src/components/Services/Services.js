import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HomeDecor from '../Images/services/home_decor.png';
import Name from '../Images/services/name.png';
import Gaming from '../Images/services/gaming.png';

const servicesData = [
  {
    id: 1,
    image: Name,
    title: "Customized Keychains",
    category: "Miniatures & Figurines",
    subtitle: "Personalize your keychain with custom names, initials, or designs to make it truly unique. Perfect as a gift or for everyday use."
  },
  {
    id: 2,
    image: Gaming,
    title: "Gaming Accessories",
    category: "Gadgets & Accessories",
    subtitle: "Upgrade your gaming setup with 3D-printed accessories like dice towers, controller stands, and more. Designed for gamers who value both style and functionality."
  },
  {
    id: 3,
    image: HomeDecor,
    title: "Home Decor",
    category: "Home Decor",
    subtitle: "Enhance your living space with 3D-printed decor, from modern lamps to stylish plant pots. Unique designs that bring creativity to your home."
  }
];

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
  const navigate = useNavigate();

  return (
    <div className='container my-16 space-y-4 '>
      {/* Header Section */}
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
        className='text-3xl font-bold text-lightGray'>Popular <span className='text-primary'>3D Printed </span>Categories</motion.h1>
        <motion.p 
        initial={{opacity:0, scale: 0.5 }}
        whileInView={{opacity:1, scale:1}}
        transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.6
        }}
        className='text-sm opacity-50 '>Discover a range of high-quality 3D-printed products, crafted with precision to add a personal touch to your daily life.</motion.p>
      </div>

      {/* Card Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{amount: 0.8}}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className='text-center p-4 space-y-6 cursor-pointer'
            onClick={() => navigate('/explore', { state: { category: service.category } })}
          >
            <motion.img
              src={service.image}
              className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300'
              alt={service.title} 
            />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
              <p className='text-darkGray'>{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
