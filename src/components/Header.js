import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <LeftMenu>
        <StyledLink to="/">PRINTIT</StyledLink> 
      </LeftMenu>
      <RightMenu>
        <StyledLink to="/bikes">Bikes</StyledLink>
        <StyledLink to="/app">App</StyledLink>
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
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #555; /* Add hover effect if desired */
  }
`;
