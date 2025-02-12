import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import './css/BackgroundVideoStyles.css'; // Import your CSS file
import UploadPage from './components/UploadPage';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import {WhyPrintIt} from './components/WhyPrintIt';
import TestPage2 from './components/TestPage2';
import { TextParallaxContentExample } from './components/TextParallaxContentExample';
import { NavTest3 } from './components/NavTest3';
import About from './components/About';
import ShowCase from './components/ShowCase';
import { HoverImageLinks } from './components/HoverImage';
import StreamingVideo from './components/Streaming/StreamVideo';
import { Cameras } from './components/Streaming/Camera';
import { AuroraHero } from './components/Models';
import WebSocketPlayer from './components/Streaming/Stream';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<AuroraHero />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/howItWorks" element={<HowItWorks />} />
            <Route path="/why" element={<WhyPrintIt />} />
            <Route path="/test2" element={<TestPage2 />} />
            <Route path="/showcase" element={<ShowCase />} />
            <Route path="/about" element={<About />} />
            <Route path="/hover" element={<HoverImageLinks />} />
            <Route path="/stream" element={<StreamingVideo />} />
            <Route path="/camera" element={<Cameras />} />
            <Route path="/testcamera" element={<WebSocketPlayer />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
