import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function registerPage() {
    // let name = "miguel";
    const [input1, setInput1] = useState('');
    const registerButton = () => {
        alert(input1)
    }
    const enterName = event => {
        setInput1(event.target.value)
    }

    return (
        <div>
            <h1>Registration Page</h1>
            <p>this is a test... the bird is the word</p>
            <input
                onChange={enterName }
                className="component-input"
                type="text"
                placeholder="Full Name"
                value={input1 }
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
            <button type="submit" value="CreateAccoutnt" className="component-button" onClick={registerButton}>HABIBI</button>
        </div>
        
        
    );
}

export default registerPage;