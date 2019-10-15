import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">FGPOS</div>
      </Link>
      <div className="header__information">
        <a href="/">Inicio</a>
        <a href="/">Planes</a>
        <a href="/">Contacto</a>
        <img
          className="header__colombia__img"
          src="https://img.icons8.com/offices/16/000000/colombia.png"
          alt="user"
        />
      </div>
      <div className="header__menu">
        <Link to="/login">
          <i className="fas fa-sign-in-alt fa-lg"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
