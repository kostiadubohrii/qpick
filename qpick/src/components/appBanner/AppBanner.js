import React from 'react';
import banner_image from '../../images/banner_image.png';
import './appBanner.scss';

const AppBanner = () => {
    return (
        <div className="banner">
            <div className="banner_title">
                <h2>Аксесуари для Iphone 13 Pro Max</h2>
            </div>
            <div className="banner_image">
                <img src={banner_image} alt="Iphone" />
            </div>
        </div>
    );
}

export default AppBanner;