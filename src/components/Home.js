import React from 'react';
import '../css/Home.css';
import Header from './Header';
import {Button} from 'antd';

const Home = () => {
  return (
    <>
    <Header />
    <section className="hero-section">
      {/* <video autoPlay muted loop>
        <source src="/src-videos/test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay">
        <h1 className='printit'>PRINTIT</h1>
        <Button>Shop Now</Button>
      </div>
    </section>
    </>
  );
};

export default Home;
