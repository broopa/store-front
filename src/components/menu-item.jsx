import React from 'react';
import  { Link } from 'react-router-dom';

import '../styles/menu-items.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <Link className={`${size} menu-item`} to={`${linkUrl}`}>
        <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
        }} />
                <div className='content'>
                    <h2 className='title'>
                        {title.toUpperCase()}
                    </h2>
                    <span className='subtitle'>
                        Shop Now
                    </span>
                </div>
            </Link>
);

export default MenuItem;