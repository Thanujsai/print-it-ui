import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import './css/BackgroundVideoStyles.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="app">
      <video className="background-video" autoPlay muted loop>
        <source src="/src-videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<ProductShowcase />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
