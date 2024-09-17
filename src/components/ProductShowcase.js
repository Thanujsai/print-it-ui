import React from 'react';
import styled from 'styled-components';
import '../css/ProductShowcase.css'
import {Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductShowcase = () => {

    const navigate = useNavigate();
    const Back = () => {
        
        navigate("/")
    }

  return (
    <>
    <section className="product-showcase">
    <Showcase>
      <Product>
        <img src="/src-images/KTM-RC-200.png" alt="Cowboy 4" />
        <h3>KTM-RC-200</h3>
      </Product>
      <Product>
        <img src="/src-images/KTM-RC-200.png" alt="Cowboy 4 ST" />
        <h3>Cowboy 4 ST</h3>
      </Product>
      {/* Add more products as needed */}
    </Showcase>
    </section>
    <div className='back'>
        <Button type='text' onClick={Back}>Back</Button>
    </div>
    </>
  );
};

export default ProductShowcase;

// Styled Components
const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
`;

const Product = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 10px;
  }
`;
