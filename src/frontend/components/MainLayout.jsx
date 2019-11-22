import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/MainLayout.scss';
import fgPosLogo from '../assets/logos/FGPosLogo.png';
import fgPosMain from '../assets/logos/FGPosMain.png';

const MainLayout = ({ children }) => (
  <>
    <div className="layout-navbar">
      <img id="fgPosLogo" src={fgPosLogo} alt="FG Pos Logo" />
      <div>
        <NavLink to="/login" activeClassName="active">Inicia sesión</NavLink>
        <NavLink to="/register" activeClassName="active">Regístrate</NavLink>
      </div>
    </div>
    <div className="layout-container">
      <div className="layout-children text-center">
        {children}
      </div>
      <hr className="hr-third-color hide-md" />
      <div className="layout-information">
        <img id="fgPosMain" src={fgPosMain} alt="FG Pos Main" />
        <h2>
          <span className="color-orange">Maneja</span>
          {' '}
tu inventario,
          {' '}
          <span className="color-orange">vende</span>
          {' '}
tus productos y
          {' '}
          <span className="color-orange">analiza</span>
          {' '}
los resultados
        </h2>
      </div>
      <hr className="hr-third-color hide-md" />
    </div>
    <div className="layout-privacy">
      <a href="/">Términos de uso</a>
      <a href="/">Declaración de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </div>
  </>
);

export default MainLayout;
