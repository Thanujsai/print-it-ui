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
      <video className="background-video" autoPlay muted loop>
        <source src="/src-videos/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <h1 style={{ margin: '50px' }}>
              <span style={{ fontWeight: 'bold', color: '#FFFFFF', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>{text}</span>
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
