import React from 'react';
import { useState } from 'react';
import '../Stylesheets/topBar.css'; 
import logo from '../images/logo5.png';

const TopBar = ({ user }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  return (
    <div className="top-bar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Swapster Logo" className="nav-logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
      </div>

      {/* Session/Login or Profile Button */}
      <div className="session-button">
        {isLoggedIn ? (
          <button onClick={() => {window.location.href = '/perfil';}}>
            Perfil
          </button>
        ) : (
          <button onClick={() => {window.location.href = '/login';}}>
            Regístrate o inicia sesión
          </button>
        )}
      </div>

      {/* Sell Button */}
      <div className="sell-button">
        <button onClick={() => {window.location.href = '/vender';}}>
          + Vender
        </button>
      </div>
    </div>
  );
};

export default TopBar;

