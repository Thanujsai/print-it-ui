import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import './css/BackgroundVideoStyles.css'; // Import your CSS file
import UploadPage from './components/UploadPage';
import Header from './components/Header';
import AppPage from './components/AppPage';
import {TestPage} from './components/TestPage';
import TestPage2 from './components/TestPage2';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<ProductShowcase />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/test2" element={<TestPage2 />} />
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
