import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function InputForm() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };
    const handleRegister = () => {
        navigate('/RegisterPage')
    }

    return (
        <div>
            <h1>ESA Parcel Search</h1>
            <center>
                { // <label className="log-in-text">Username</label>
                }
                <input
                className="component-input"
                type="text"
                placeholder="Enter Email"
                value={input1}
                onChange={handleInputChange(setInput1)}
            />
                <br></br>

                {//<label className="log-in-text">Password</label>
                }
                <input
                className="component-input"
                type="text"
                placeholder="Enter Password"
                value={input2}
                onChange={handleInputChange(setInput2)}
                />
                <br></br>
                <br></br>
                <input type="submit" value="Login" className="component-button"></input>
                <input type="submit" value="Register" className="component-button" onClick={handleRegister}></input>
            </center>
        </div>

    );
}

export default InputForm;
