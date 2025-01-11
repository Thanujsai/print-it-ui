//write a react component which prints hello on screen
import React from 'react';
import ReactDOM from 'react-dom';

export const Hello = () => {
    return <h1>Hello</h1>;
    }

    //i need a button when clicked should alert user saying hello
    export const HelloButton = () => {
        return <button onClick={() => alert('Hello')}>Click Me</button>;
    }

    //also add a method to show a div with hello when button is clicked
    export const HelloButtonWithDiv = () => {
        const [show, setShow] = React.useState(false);
        return (
            <div>
                <button onClick={() => setShow(true)}>Click Me</button>
                {show && <div>Hello</div>}
            </div>
        );
    }
    