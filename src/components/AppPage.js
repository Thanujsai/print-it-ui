import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import '../css/AppPage.css';
import Header from './Header';

function AppPage() {

    const navigate = useNavigate();
    const Back = () => {
        navigate('/');
      };
  return (
    <div className='container'>
        <Header />
      <h1 className='welcome'>Welcome to App</h1>
      <div className='back' onClick={Back}><Button>Back</Button></div>
    </div>
  )
}

export default AppPage;
