import React from 'react';
import '../assets/styles/components/DashboardLayout.scss';

const DashboardLayout = ({ children }) => (
  <div id="dashboardMainContainer">
    <aside id="dashboardAside">
      <div id="headerMenuButtonContainer" className="h-6 border-bottom">
        <button className="dashboard-button button-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul>
        <li className="active">
          <i className="fas fa-utensils"></i>
        </li>
        <li>
          <i className="fas fa-boxes"></i>
        </li>
        <li>
          <i className="fas fa-chart-pie"></i>
        </li>
      </ul>
    </aside>
    <div id="interactionContainer">{children}</div>
  </div>
);

export default DashboardLayout;
