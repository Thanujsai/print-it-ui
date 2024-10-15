import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const fonts = [
  'Arial, sans-serif',
  'Courier New, monospace',
  'Georgia, serif',
  'Times New Roman, serif',
  'Verdana, sans-serif',
  'Dancing Script, cursive'
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

const Header = () => {
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
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <Nav>
      <LeftMenu>
        <StyledLink to="/" style={{fontFamily: 'Dancing Script, cursive'}}>PRINTIT</StyledLink> 
      </LeftMenu>
      <RightMenu>
        <StyledLink to="/models">MODELS</StyledLink>
        <StyledLink to="/app">APP</StyledLink>
        <StyledLink to="/test">TEST1</StyledLink>
        <StyledLink to="/test2">TEST2</StyledLink>
        <StyledLink to="/test3">TEST3</StyledLink>
      </RightMenu>
    </Nav>
  );
};

export default Header;

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  padding-right: 20px
  background-color: rgba(238, 229, 211, 0.7); /* Semi-transparent background color */
  z-index: 1; /* Ensure header is above the video */
  max-width: 1500px; /* Add a max-width to keep the layout tighter */
  margin: 0 auto; /* Center the nav content */
`;

const LeftMenu = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const RightMenu = styled.div`
  display: flex;
  margin-right: 20px; /* Add margin to keep it away from the edge */
  
  @media (min-width: 1600px) {
    padding-left: 1450px;
  }

  @media (max-width: 1599px) and (min-width: 1200px) {
    padding-left: 1000px; /* Adjust padding for medium-large screens */
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    padding-left: 500px; /* Adjust padding for tablets or small desktops */
  }

  @media (max-width: 767px) {
    padding-left: 50px; /* Adjust padding for mobile screens */
  }
`;


const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #555; /* Add hover effect if desired */
  }
`;
