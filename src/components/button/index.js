import React, { useState } from 'react';

export const Button = ({ clickedText }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <button
            onClick={() => setClicked(true)}>
            { clicked ? clickedText : 'Click on me'}
        </button>
    );
}