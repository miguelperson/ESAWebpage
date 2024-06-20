import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function registerPage() {
    // let name = "miguel";
    const [input1, setInput1] = useState('');

    return (
        <div>
            <h1>Registration Page</h1>
            <p>this is a test... the bird is the word</p>
            <input
                className="component-input"
                type="text"
                placeholder="Full Name"
            />

            <input
                className="component-input"
                type="text"
                placeholder="Company Email Address"

            />

            <input
                className="component-input"
                type="password"
                placeholder="Password"

            />

            <input
                className="component-input"
                type="password"
                placeholder="Re-Enter Password"

            />

            <input type="submit" value="Create Account" className="component-button"></input>
        </div>
        
        
    );
}

export default registerPage;