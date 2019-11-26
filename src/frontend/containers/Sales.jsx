import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Sales.scss';
import SalesCart from '../components/SalesCart';
import ItemsList from '../components/ItemsList';
import LogOut from '../components/Logout';
import SalesCartResponsiveButton from '../components/SalesCartResponsiveButton';

const Sales = ({ user, fullScreenCart }) => {
  return (
    <>
      <div id="salesItems">
        <div id="salesItemsHeader" className="h-6 border-bottom bg-white">
          <div />
          <h3 className="mb-0">
            {user.name}
            {' '}
            - Ventas
          </h3>
          <LogOut />
        </div>
        <ItemsList available={true} />
      </div>
      <div id="salesCart" className={fullScreenCart ? 'full-screen' : ''}>
        <SalesCart />
      </div>
      <SalesCartResponsiveButton />
    </>
  );
};

const mapStateToProps = ({ user, fullScreenCart }) => {
  return {
    user,
    fullScreenCart
  };
};

export default connect(
  mapStateToProps,
  null,
)(Sales);
