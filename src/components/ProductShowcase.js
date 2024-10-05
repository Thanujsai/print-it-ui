import React, { useEffect, useState } from 'react';
import '../css/ProductShowcase.css';
import { Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { Carousel } from 'antd';
import Header from './Header';

// Custom styles for the carousel images
const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
};

const ProductShowcase = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route location
  const [key, setKey] = useState(0); // State to force re-rendering

  useEffect(() => {
    // Force re-rendering by updating the key when the /models route is accessed
    setKey((prevKey) => prevKey + 1);
  }, [location.pathname]); // Re-run the effect whenever the route path changes

  // Function to navigate back to the homepage
  const Back = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      {/* Slider container */}
      <div className="slider-containerr">
        <Carousel key={key} className="carousel-stylee" autoplay>
          <div>
            <img
              src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
              style={contentStyle}
              className="photos"
              alt="Iron Man Scene"
            />
          </div>
          <div>
            <img
              src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
              style={contentStyle}
              className="photos"
              alt="Iron Man Art"
            />
          </div>
          <div>
            <img
              src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
              style={contentStyle}
              className="photos"
              alt="Logan Movie"
            />
          </div>
          <div>
            <img
              src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
              style={contentStyle}
              className="photos"
              alt="Movie Scene"
            />
          </div>
        </Carousel>
        <div className='back' onClick={Back}><Button>Back</Button></div>
      </div>
    </>
  );
};

export default ProductShowcase;
