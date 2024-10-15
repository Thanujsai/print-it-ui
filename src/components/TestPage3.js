import { React, useRef } from 'react';
import '../css/TestPage3.css';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { Button } from 'antd';

function TestPage3() {

  const navigate = useNavigate();

  const Back = () => {
      navigate("/");
  }
  return (
    <div className='test3'>
    <h1>Hello</h1>
    <Button className='back-test3' onClick={Back}>Back</Button>
    </div>
  )
}

export default TestPage3;
