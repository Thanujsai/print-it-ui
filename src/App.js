import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home2 from './components/v0.0/Home2.js';
import ProductShowcase from './components/v0.0/ProductShowcase.js';
import Footer from './components/v0.0/Footer.js';
import './css/BackgroundVideoStyles.css'; // Import your CSS file
import UploadPage from './components/v0.0/UploadPage.js';
import Header from './components/v0.0/Header.js';
import HowItWorks from './components/v0.0/HowItWorks.js';
import {WhyPrintIt} from './components/v0.0/WhyPrintIt.js';
import TestPage2 from './components/v0.0/TestPage2.js';
import { TextParallaxContentExample } from './components/v0.0/TextParallaxContentExample.js';
import { NavTest3 } from './components/v0.0/NavTest3.js';
import About from './components/v0.0/About.js';
import ShowCase from './components/v0.0/ShowCase.js';
import { HoverImageLinks } from './components/v0.0/HoverImage.js';
import StreamingVideo from './components/Streaming/StreamVideo';
import { Cameras } from './components/Streaming/Camera';
import { AuroraHero } from './components/v0.0/Models.js';
import WebSocketPlayer from './components/Streaming/Stream';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import ProgressBar from './components/FramerMotion/ProgressBar';
import ExitAndEnterAnimation from './components/FramerMotion/ExitAndEnterAnimation';
import DraggableDiv from './components/FramerMotion/DraggableDiv';
import Variants from './components/FramerMotion/Variants.js';
import MainPage from './components/MainPage.js';
import Explore from './components/Explore/Explore.js';
import Details from './components/ProductDetails/Details.js';

function App() {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/explore" element={<Explore />} />
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
            <Route path="/framer" element={<ProgressBar />} />
            <Route path="/exit" element={<ExitAndEnterAnimation />} />
            <Route path="/draggable" element={<DraggableDiv />} />
            <Route path="/variants" element={<Variants />} />
            <Route path="/details" element={<Details />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
