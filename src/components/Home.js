import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { Button } from 'antd';
import '../css/Fonts.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { TestPage } from './TestPage';
import { useTypewriter, Cursor, typeSpeed, deleteSpeed } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  const Upload = () => {
    navigate("/upload");
  };

  // The text you want to animate
  const welcomeText = "Turn Your 3D Designs into Reality";
  // Splitting the welcome text into an array of characters
  const splitText = welcomeText.split("");

  console.log(splitText)

  const [text] = useTypewriter({
    words : ['Turn Your 3D Designs into Reality'],
    typeSpeed:120,
  });

  return (
    <>
      <video className="background-video" autoPlay muted loop>
        <source src="/src-videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            {/* Animated heading */}
            {/* <Example /> */}
            <h1 style = {{margin:'50px'}}>
              <span style={{fontWeight: 'bold'}}>          
            {text}
            </span>
            <span style={{color:'red'}}>
            <Cursor cursorStyle='|'/>
            </span>
            </h1>
            {/* Paragraph with delayed appearance */}
            {/* <p className="description delayed-paragraph" style={{ textAlign: 'left', textTransform: 'none' }}>
              We’re two brothers who turned our love for 3D printing into a passion project. Now, you can upload your designs, 
              choose your materials, and we’ll handle the rest. Whether it's a one-off design or something for fun, we’ve got your back.
            </p> */}
            {/* Upload button with further delayed appearance */}
            <div className="upload delayed-upload">
              <Button onClick={Upload}>Upload Your Model</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
