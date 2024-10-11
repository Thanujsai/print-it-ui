import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import '../css/AppPage.css';
import Header from './Header';

function AppPage() {
    const navigate = useNavigate();

    // The text you want to animate
    const welcomeText = "Welcome to App";

    // Splitting the welcome text into an array of characters
    const splitText = welcomeText.split("");

    console.log("split text : ");
    console.log(splitText);
    const Back = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <Header />
            <h1 className='welcome'>
                {splitText.map((char, index) => (
                    <span key={index} className='char' style={{ animationDelay: `${index * 0.1}s` }}>
                        {char === " " ? "\u00A0" : char} {/* Handle space character */}
                    </span>
                ))}
            </h1>
            <div className='back-button' onClick={Back}>
                <Button>Back</Button>
            </div>
        </div>
    );
}

export default AppPage;
