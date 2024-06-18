import React, { useState } from 'react';

function InputForm() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleInputChange = (setter) => (event) => {
        setter(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter first value"
                value={input1}
                onChange={handleInputChange(setInput1)}
            />
            <input
                type="text"
                placeholder="Enter second value"
                value={input2}
                onChange={handleInputChange(setInput2)}
            />
        </div>
    );
}

export default InputForm;
