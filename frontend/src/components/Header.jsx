// src/components/Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <ul>
          <li alt="Home"><a href="/">Home</a></li>
          <li alt="All Articles"><a href="/articles">Articles</a></li>
          <li alt="About"><a href="/about">About</a></li>
        </ul>
      </h1>
    </header>
  );
};

export default Header;
