import React, { useState, useEffect } from 'react';
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
import { useCart } from '../CartContext';
import black from '../Images/black.png';
import {ShiftingDropDown } from '../DetailsDropdown/Dropdown';
import Swal from "sweetalert2";


const Details = () => {
  const { id } = useParams();
  const product = MODELS.find((model) => model.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => { 
      window.scrollTo(0, 0); // Scroll to the top whenever the Details component is mounted
  }, []);

  // State to track the selected image
  const [selectedImage, setSelectedImage] = useState(product?.image);

  const { addToCart } = useCart();//This extracts the addToCart function from the useCart context.

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      title: "🎉 Added to Cart!",
      text: "This item has been added to your cart. You can continue shopping or check out anytime!",
      icon: "success",
      confirmButtonText: "Got it!",
      cancelButtonText: "🛒 Go to Cart",
      timer: 5000, // Auto-close after 5 seconds
      showCloseButton: true,
      showCancelButton: true,
    }).then((result) => {
      if(result.dismiss === Swal.DismissReason.cancel) {
        navigate("/cart")// Navigate to cart if "Go to Cart" is clicked
      }
    });
  };
  /*.then is used because Swal.fire returns a Promise. When the modal is displayed, it waits for the user to interact with it—like clicking a button or closing it. Once the user takes an action, the Promise resolves with an object that details the result of that interaction. The .then method allows you to run code based on that result, such as navigating to the cart if the user clicks "Go to Cart."*/
  

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
                <ShiftingDropDown />
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
          {[product.image, product.image, product.image, product.image, black].map((img, index) => (
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
        <motion.div 
        initial={{opacity:0, x:100 }}
        animate={{opacity:1, x:0}}
        transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:1
        }}
        className='mb-[150px]'>
          <h1 className="text-2xl font-medium pb-2">{product.title}</h1>
          <h1 className="text-l font-bold pb-10">{product.price}</h1>
          <h1 className="text-sm break-words w-80 whitespace-pre-wrap">{product.info}</h1>
          <div className="flex items-center mt-2">
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={star} alt="star" className="w-6 h-6" />
            <img src={starUnfilled} alt="star" className="w-6 h-6" />
            <p className="ml-2">(122)</p>
          </div>
          <div className='flex justify-center items-center pt-12 pr-20'>
          <button 
            onClick={handleAddToCart} 
            className='bg-black text-white px-6 py-2 rounded-md transition-all duration-300 ease-in-out 
            hover:text-white hover:shadow-lg hover:scale-105'>
            Add to Cart
          </button>
          </div>

        </motion.div>
      </div>

      {/* Buttons */}
      {/* <div className='flex justify-center items-center gap-6 p-6'>
        <Button type="primary" onClick={handleAddToCart}>Add to Cart</Button>
        <Button type="primary" onClick={() => navigate("/explore")}>Back</Button>
      </div> */}

      {/*suggested content */}
      <div className='container'>
        <motion.h1
        initial={{opacity:0, y:100 }}
        animate={{opacity:1, y:0}}
        transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:0.2
        }}
        className='text-xl font-semibold text-center py-10'>SIMILAR PRODUCTS</motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {MODELS.map((model) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              onTap={() => {
                navigate(`/details/${model.id}`);
                setSelectedImage(model.image);//when an image is selected from suggested content, that image must be shown in the main big image section
                window.scrollTo(0, 0); // Scroll to the top
              }}
              className='p-4 border rounded shadow-sm space-y-2 cursor-pointer'
            >
              <img src={model.image} alt={model.title} className='h-[240px] w-full object-cover' />
              <div className="flex justify-between items-center">
                <div>
                  <p className='text-xl font-medium'>{model.title}</p>
                  <p className='text-gray-500'>{model.category}</p>
                </div>
                <div>
                  <p className='text-gray-500'>{model.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Details;
