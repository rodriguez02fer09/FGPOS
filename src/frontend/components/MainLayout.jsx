import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/MainLayout.scss';
import fgPosLogo from '../assets/logos/FGPosLogo.png';

const MainLayout = ({ children }) => (
  <>
    <div className="layout-navbar">
      <NavLink to="/login" activeClassName="active">Inicia sesión</NavLink>
      <NavLink to="/register" activeClassName="active">Regístrate</NavLink>
    </div>
    <div className="layout-container">
      <div className="layout-children">
        {children}
      </div>
      <div className="layout-information">
        <img src={fgPosLogo} alt="FG Pos Logo" />
      </div>
    </div>
    <div className="layout-privacy">
      <a href="/">Términos de uso</a>
      <a href="/">Declaración de privacidad</a>
      <a href="/">Centro de ayuda</a>
    </div>
  </>
);

export default MainLayout;
