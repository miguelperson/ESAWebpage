import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [input1, setInput1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerButton = () => {
        let tempEmail = email.split("@");
        // Check if tempEmail has two parts and the domain matches exactly "esa-solar.com"
        if (tempEmail.length === 2 && tempEmail[1].localeCompare("esa-solar.com") === 0) {
            alert("Emails match, congratulations!"); // would use this block to push information to the back end
        } else {
            alert("Invalid email address.");
        }
    };

    const enterName = event => {
        setInput1(event.target.value);
    };

    const enterEmail = event => {
        setEmail(event.target.value);
    };

    const enterPassword = event => {
        setPassword(event.target.value);
    };

    const enterConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <p>this is a test... the bird is the word</p>
            <input
                onChange={enterName}
                className="component-input"
                type="text"
                placeholder="Full Name"
                value={input1}
            />
            <input
                onChange={enterEmail}
                className="component-input"
                type="email"
                placeholder="Company Email Address"
                value={email}
            />
            <input
                onChange={enterPassword}
                className="component-input"
                type="password"
                placeholder="Password"
                value={password}
            />
            <input
                onChange={enterConfirmPassword}
                className="component-input"
                type="password"
                placeholder="Re-Enter Password"
                value={confirmPassword}
            />
            <button className="component-button" onClick={registerButton}>Create Account</button>
        </div>
    );
}

export default RegisterPage;
