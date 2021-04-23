import React, { useState } from 'react';

import './tabs.scss';

export const Tabs = ({ tabs }) => {
    const [activeTab, setAtiveTab] = useState(undefined);

    const handleClick = content => {
        const contentEl = <div className='content'>{content}</div>

        setAtiveTab(contentEl);
    };

    return (
        <React.Fragment>
            <ul className='tabs'>
                {tabs?.map((tab, index) =>
                    tab &&
                    <li onClick={() => handleClick(tab.content)} key={index}>
                        <h2>{tab.title}</h2>
                    </li>
                )
                }
            </ul >

            {activeTab}

        </React.Fragment>
    );
}