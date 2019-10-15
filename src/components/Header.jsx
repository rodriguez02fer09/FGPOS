import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">FGPOS</div>
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
        <div className="header__menu--profile">
          <img src="" alt="user" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
