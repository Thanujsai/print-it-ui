import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MODELS } from '../Data/Data';
import starUnfilled from '../Images/starUnfilled.png';
import star from '../Images/star.png';
import Navbar from '../Navbar/Navbar';
import { Button } from 'antd';
import {motion} from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import GradientButton from '../GradientButton/GradientButton';
import { FaShoppingCart } from 'react-icons/fa';


const Details = () => {
  const { id } = useParams();
  const product = MODELS.find((model) => model.id.toString() === id);
  const navigate = useNavigate();

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className='py-2'>
      {/* Navbar */}
      <nav>
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
                  onClick={() => navigate("/")}
                  className='text-2xl font-semibold cursor-pointer'>
                  <span className='text-primary'>Print</span>
                  It
                </motion.h1>
                    </div>
                </div>

                {/* Cart Icon */}
                <div className='absolute top-4 right-4 cursor-pointer' onClick={() => navigate('/cart')}>
                  <FaShoppingCart size={28} className='text-gray-700 hover:text-black'/>
                </div>
      </nav>

      {/* Centered Content */}
      <div 
      className="flex justify-center items-center gap-6 p-6">
        {/* Left Side: Stacked Small Images */}
        <div 
        className="flex flex-col gap-3">
          {[product.image, product.image, product.image, product.image].map((img, index) => (
            <motion.img
              initial={{opacity:0, scale:0 }}
              animate={{opacity:1, scale:1}}
              transition={{
                  type:"spring",
                  stiffness:100,
                  damping:10,
                  delay:index*0.2
                }}
              key={index}
              src={img}
              alt={product.title}
              className="w-24 h-24 object-cover cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

                {/* Right Side: Normal Large Image */}
                <motion.div
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            mass: 0.8,
            delay: 0.8
          }}
        className="w-[400px] h-[400px]">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-full object-cover border border-gray-300"
          />
        </motion.div>

        {/* Product Details */}
        <div>
          <h1 className="text-xl font-bold">{product.title}</h1>
          <h1 className="text-l">{product.info}</h1>
          <h1 className="text-l font-bold">{product.price}</h1>
          <div className="flex items-center mt-2">
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={starUnfilled} alt="star" className="w-6 h-6" />
            <p className="ml-2">(122)</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className='flex justify-center items-center gap-6 p-6'>
        <GradientButton />
        <Button type="primary" onClick={() => navigate("/explore")}>Back</Button>
      </div>
    </div>
  );
};

export default Details;
