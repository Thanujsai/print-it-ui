import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import Header from './Header';
import { Button } from 'antd';
import '../css/Fonts.css'
import { FaAlignLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  useEffect(() => {
    const fontInterval = setInterval(() => {
      setFontIndex(prevIndex => (prevIndex + 1) % fonts.length);
    }, 1000);

    const colorInterval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => {
      clearInterval(fontInterval);
      clearInterval(colorInterval);
    };
  }, []);

  const Upload = () => {
    navigate("/upload");
  }
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
        <h1 className="hero-text" style={{ textAlign: 'left', textTransform: 'none'}}>Turn Your 3D Designs into Reality</h1>
        <p className="description" style={{ textAlign: 'left', textTransform: 'none' }}>
        We’re two brothers who turned our love for 3D printing into a passion project. Now, you can upload your designs, 
        choose your materials, and we’ll handle the rest. Whether it's a one-off design or something for fun, we’ve got your back.
        </p>
        <div className = 'upload'>
        <Button onClick={Upload}>Upload Your Model</Button>
        </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Home;
