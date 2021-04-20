import React from 'react';

export const Title = ({ tag, title }) => {
    const CustomTag = `h${tag}`;

    return (
        <React.Fragment>
            { title && <CustomTag>{title}</CustomTag>}
        </React.Fragment>
    );
}