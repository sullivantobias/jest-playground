import React, { useRef, useState } from 'react';

export const Comments = ({ clickedText }) => {
    const [comments, setComments] = useState([]);
    const inputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        const message = inputRef.current.value;

        setComments(prev => [...prev, message]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type='text' />
                <button type='submit'>Send</button>
            </form>
            <ul>
                {comments?.map((comment, index) => <li key={index}>{comment}</li>)}
            </ul>
        </div>
    );
}