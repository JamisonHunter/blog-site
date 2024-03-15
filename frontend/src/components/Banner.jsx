import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src="/assets/background.png" alt="Banner Image" className="banner-image" />
      <div className="banner-text">
        <h2>History & Literature</h2>
      </div>
    </div>
  );
};

export default Banner;
