import React, { useState } from 'react';


function InputForm() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div>
            <h1>ESA Parcel Search Log in</h1>
            <center>
                { // <label className="log-in-text">Username</label>
                }
                <input
                className="component-input"
                type="text"
                placeholder="Enter Username"
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
            </center>
        </div>

    );
}

export default InputForm;
