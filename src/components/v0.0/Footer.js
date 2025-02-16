import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const InstaClick = () => {
  console.log('clicked on insta logo ---- navigating to insta page');
  window.open("https://www.instagram.com/", "_blank");
}

const Footer = () => {
  return (
    <FooterSection>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram onClick={InstaClick} />
      </div>
      <p>© 2024 Print It</p>
    </FooterSection>
  );
};

export default Footer;

// Styled Components
const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9) /* Semi-transparent background color */
  padding: 20px;
  padding-bottom:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 2; /* Ensure footer is above the video */

  .social-icons {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 10px;
    cursor: pointer;
    color: #333; /* Set the color of the icons */
    font-size: 24px; /* Adjust size of icons */
  }

  p {
    margin: 0;
    margin-right: 50px;
    color: #333; /* Set color of the text */
  }
`;
