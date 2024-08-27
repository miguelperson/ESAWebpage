import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function EmailVerification() {
    const [input1, setInput1] = useState('');
    const navigate = useNavigate();


    const emailFunction = (event) => {
        event.preventDefault();
        navigate('/DashBoard');
    }


    return (
        <div>
            <h1>email verification placeholder</h1>
            <form onSubmit={emailFunction}>
                <input
                    onChange={e => setInput1(e.target.value)}
                    className="component-input"
                    type="text"
                    placeholder="Full Name"
                    value={input1}
                />
                <button type="submit" className="component-button">EMAIL VERIFIED BITCH</button>
            </form>
        </div>

    );
}

export default EmailVerification;
