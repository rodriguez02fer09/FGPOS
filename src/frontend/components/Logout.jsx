import React from 'react';
import { connect } from 'react-redux';
import { defineUser } from '../actions';

const LogOut = ({ defineUser }) => {
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    defineUser({});
    window.location.href = '/login';
  };

  return (
    <div>
      <button className="dashboard-button button-white" type="button" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt" />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  defineUser,
};

export default connect(null, mapDispatchToProps)(LogOut);
