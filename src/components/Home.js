import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import Header from './Header';
import {Button} from 'antd';

const fonts = [
  'Arial, sans-serif',
  'Courier New, monospace',
  'Georgia, serif',
  'Times New Roman, serif',
  'Verdana, sans-serif'
];

const colors = [
  '#003366', // Navy Blue
  '#FF6F61', // Coral
  '#FFFFFF', // White
  '#4B4B4B', // Dark Gray
  '#FFD700', // Gold
  '#FFCBA4', // Peach
  '#98FF98', // Mint Green
  '#FFD300', // Bright Yellow
  '#E6E6FA', // Lavender
  '#FFB6C1'  // Soft Pink
];


const Home = () => {

  const [fontIndex, setFontIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);


  useEffect(() => {
    const fontInterval = setInterval(() => {
      setFontIndex(prevIndex => (prevIndex + 1) % fonts.length);
    }, 1000);

    const colorInterval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => {
      clearInterval(fontInterval);
      clearInterval(colorInterval)
      
    };
  }, []);
  return (
    <>
    <Header />
    <section className="hero-section">
      {/* <video autoPlay muted loop>
        <source src="/src-videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay">
        <h1 className="printit" style={{ fontFamily: fonts[fontIndex], color: colors[colorIndex] }}>PRINTIT</h1>
        <Button className = 'shop'>Shop Now</Button>
      </div>
    </section>
    </>
  );
};

export default Home;
