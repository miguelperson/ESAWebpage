import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [input1, setInput1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const registerButton = () => {
        let isValid = true;
        if (!input1) {
            setNameError("Please enter your full name");
            isValid = false;
        } else {
            setNameError('');
        }

        let tempEmail = email.split("@");
        if (tempEmail.length === 2 && tempEmail[1].localeCompare("esa-solar.com") === 0) {
            setEmailError('');
        } else {
            setEmailError("Invalid email address. Must be a 'esa-solar.com' email.");
            isValid = false;
        }

        if (isValid) {
            // Proceed with backend submission
            alert("Form is valid, proceed with backend submission");
        }
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <p>this is a test... the bird is the word</p>
            <div>
                <input
                    onChange={e => setInput1(e.target.value)}
                    className="component-input"
                    type="text"
                    placeholder="Full Name"
                    value={input1}
                />
                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
            </div>
            <div>
                <input
                    onChange={e => setEmail(e.target.value)}
                    className="component-input"
                    type="email"
                    placeholder="Company Email Address"
                    value={email}
                />
                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
            </div>
            <input
                onChange={e => setPassword(e.target.value)}
                className="component-input"
                type="password"
                placeholder="Password"
                value={password}
            />
            <input
                onChange={e => setConfirmPassword(e.target.value)}
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
