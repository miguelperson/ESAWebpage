import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const [verificationCode, setCode] = useState('');

    return (
        <div>
            <h1>ESA Parcel Search</h1>
            <input
                onChange={e => setCode(e.target.value)}
                className="component-input"
                type="email"
                placeholder="Confirmation Code"
                value={verificationCode}
            />
        </div>

    );
}

export default DashBoard;