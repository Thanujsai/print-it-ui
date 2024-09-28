import React from 'react';
import '../css/ProductShowcase.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import Header from './Header';

// Custom styles for the carousel images
const contentStyle = {
  height: '500px', // Fixed height for images
  color: '#fff', // Font color in case text is added later
  textAlign: 'center', // Aligns any text in the center of the image
  background: '#364d79', // Background color (not visible behind images)
  width: '100%', // Ensure images take the full width of the carousel container
};

const ProductShowcase = () => {
  const navigate = useNavigate();

  // Function to navigate back to the homepage
  const Back = () => {
    navigate('/');
  };

  return (
    <>
      {/* Container that holds the carousel, centered with flexbox */}
      <div className="slider-containerr">
        {/* Carousel component from Ant Design with autoplay */}
        <Header />
        <Carousel className="carousel-stylee" autoplay>
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
              src="https://i.postimg.cc/FHt0YdYK/iron-man-ouqxo5w2b59h0042.jpg"
              style={contentStyle}
              className="photos"
              alt="Iron Man Art"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/k4hbqBrq/logan.jpg"
              style={contentStyle}
              className="photos"
              alt="Logan Movie"
            />
          </div>
          <div>
            <img
              src="https://i.postimg.cc/y8X3Wfqf/wallpaperflare-com-wallpaper.jpg"
              style={contentStyle}
              className="photos"
              alt="Movie Scene"
            />
          </div>
        </Carousel>
      </div>

      {/* Back button for navigation */}
      <div className="back">
        <Button type="text" onClick={Back}>
          Back
        </Button>
      </div>
    </>
  );
};

export default ProductShowcase;
