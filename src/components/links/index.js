import React, { useState } from 'react';

export const Link = ({ page, children }) => {
    const STATUS = {
        HOVERED: 'hovered',
        NORMAL: 'normal',
    };

    const [linkClass, setLinkClass] = useState(STATUS.NORMAL);

    const _onMouseEnter = () => {
        setLinkClass(STATUS.HOVERED)
    }

    const _onMouseLeave = () => {
        setLinkClass(STATUS.NORMAL)
    }

    return (
        <a
            className={linkClass}
            href={page || '#'}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
        >
            {children}
        </a>
    );
}