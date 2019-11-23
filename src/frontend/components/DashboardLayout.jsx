import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/DashboardLayout.scss';

const DashboardLayout = ({ children }) => (
  <main id="dashboardMainContainer">
    <aside id="dashboardAside">
      <div id="headerMenuButtonContainer" className="h-6 border-bottom">
        <button className="dashboard-button button-white" type="button">
          <i className="fas fa-bars" />
        </button>
      </div>
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
        <li>
          <i className="fas fa-chart-pie" />
        </li>
      </ul>
    </aside>
    <div id="interactionContainer">{children}</div>
  </main>
);

export default DashboardLayout;
