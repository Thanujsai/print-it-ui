import React from 'react';
import { NavTest3 } from './NavTest3';
import ProductShowcase from './ProductShowcase';
import Header from './Header';
import { Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import '../css/About.css';
import HoverDevCards from './Cards';
import { RevealBento } from './Grid'

function About() {

  const navigate = useNavigate();
  const Back = () => {
    navigate("/");
}
  return (
    <>
        <NavTest3 />
        <RevealBento />
        <div className="button-back-testpage3">
        <Button className='back-button-testpage3' onClick={Back}>Back</Button>
        </div>
        <div className='hoverDevCards'><HoverDevCards /></div>
        
    </>
  )
}

export default About;
