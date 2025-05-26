// src/Components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <div className="top-bar">
      <div className="logo">
        <span className="logo-highlight">▶</span> TROL<span className="cart">🛒</span>Y
      </div>
      <div className="auth-links">
        <a href="#">SEARCH</a>
        <a href="#">LOGIN</a>
        <a href="#">REGISTER</a>
      </div>
    </div>

    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
      <NavLink to="/flash-sale" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>FLASH SALE</NavLink>
      <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>NEW ARRIVALS</NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PRODUCTS</NavLink>
      <NavLink to="/top-selling" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>TOP SELLING</NavLink>
      <NavLink to="/audio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>AUDIO</NavLink>
      <NavLink to="/smart-phones" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>SMART PHONES</NavLink>
      <a href="#">CHARGING AND POWER</a>
    </nav>
  </header>
);

export default Header;
