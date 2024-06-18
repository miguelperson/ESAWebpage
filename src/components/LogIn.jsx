import React, { useState } from 'react';
import './components/Login.css'; // Make sure to create a corresponding CSS file

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Log In</button>
                <button className="link-button" onClick={() => console.log('Forgot password')}>
                    Forgot Password?
                </button>
                <button className="link-button" onClick={() => console.log('Register')}>
                    Register Account
                </button>
            </div>
        </div>
    );
}

export default Login;
