import React from 'react';
import { motion } from 'framer-motion';
import '../css/HowItWorks.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {

  const backgroundImage = '/src-images/backgroundForHowItWorks.jpg';
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
      style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}>
      <div className="how-it-works-container">
        <div className="steps-container flex justify-center gap-16 px-8 py-12 text-black">
          
          {/* Step 1 */}
          <div className="step-wrapper flex items-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="step-box" data-aos="fade-right" data-aos-duration="1000">
              <h2>Step 1: Upload Your Model</h2>
              <p>Upload your 3D design in any of the supported formats.</p>
            </div>
            <div className="arrow" data-aos="fade-left" data-aos-duration="1000">&#8594;</div>
          </div>
          
          {/* Step 2 */}
          <div className="step-wrapper flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <div className="step-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
              <h2>Step 2: Choose Materials</h2>
              <p>Select the material and color of your print.</p>
            </div>
            <div className="arrow" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">&#8594;</div>
          </div>

          {/* Step 3 */}
          <div className="step-wrapper flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
            <div className="step-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
              <h2>Step 3: Get a Quote</h2>
              <p>Receive an instant price based on your selections.</p>
            </div>
            <div className="arrow" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">&#8594;</div>
          </div>

          {/* Step 4 */}
          <div className="step-wrapper flex items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
            <div className="step-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500">
              <h2>Step 4: Print & Ship</h2>
              <p>Your model is printed and shipped to your door!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <motion.div
        className="get-started-container text-center py-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p className="text-lg md:text-xl mb-6 text-black">
          Upload your 3D model and get started with high-quality printing today!
        </p>
        
        <motion.button
          className="upload-btn px-8 py-3 text-lg bg-green-600 text-white font-semibold rounded-lg shadow-lg transition hover:bg-green-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/upload')}
        >
          Upload Your Model
        </motion.button>
      </motion.div>
      </div>
    </>
  );
};

export default HowItWorks;
