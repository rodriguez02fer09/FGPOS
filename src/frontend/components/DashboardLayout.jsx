import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/DashboardLayout.scss';

const DashboardLayout = ({ children }) => (
  <main id="dashboardMainContainer">
    <aside id="dashboardAside">
      <div id="headerMenuButtonContainer" className="h-6 border-bottom" />
      <ul>
        <NavLink to="/sales" activeClassName="active">
          <li>
            <i className="fas fa-utensils" />
          </li>
        </NavLink>
        <NavLink to="/inventory" activeClassName="active">
          <li>
            <i className="fas fa-boxes" />
          </li>
        </NavLink>
        <NavLink to="/invoices" activeClassName="active">
          <li>
            <i className="fas fa-chart-pie" />
          </li>
        </NavLink>
      </ul>
    </aside>
    <div id="interactionContainer">{children}</div>
  </main>
);

export default DashboardLayout;
