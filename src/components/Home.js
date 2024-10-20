import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { Button } from 'antd';
import '../css/Fonts.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

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
            <h1>
              {splitText.map((char, index) => (
                <span key={index} className="char" style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === " " ? "\u00A0" : char} {/* Handle space character , it replaces the space with a non-breaking space (\u00A0)*/}
                </span>
              ))}
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
