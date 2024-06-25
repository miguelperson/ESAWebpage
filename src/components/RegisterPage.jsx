import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [input1, setInput1] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

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
            // alert("Form is valid, proceed with backend submission"); // this is where the back end handling will be done
            navigate('/emailVerification');
        }
    };

        const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        registerButton();
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setInput1(e.target.value)}
                    className="component-input"
                    type="text"
                    placeholder="Full Name"
                    value={input1}
                />
                {nameError && <div style={{ color: 'red' }}>{nameError}</div>}

                <input
                    onChange={e => setEmail(e.target.value)}
                    className="component-input"
                    type="email"
                    placeholder="Company Email Address"
                    value={email}
                />
                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

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

                <button type="submit" className="component-button">Create Account</button>
            </form>
        </div>
    );
}

export default RegisterPage;