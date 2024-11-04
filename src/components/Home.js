import React from 'react';
import '../css/Home.css';
import { Button } from 'antd';
import '../css/Fonts.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import StreamingVideo from './Streaming/StreamVideo';

const Home = () => {
  const navigate = useNavigate();

  const Upload = () => {
    navigate("/upload");
  };

  const [text] = useTypewriter({
    words: ['Turn Your 3D Designs into Reality'],
    typeSpeed: 120,
  });

  return (
    <>
      {/* Replace background video with StreamingVideo */}
      <div className="background-video">
        <StreamingVideo />
      </div>
      <Header />
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <h1 style={{ margin: '50px' }}>
              <span style={{ fontWeight: 'bold' }}>{text}</span>
              <span style={{ color: 'red' }}>
                <Cursor cursorStyle='|' />
              </span>
            </h1>
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
