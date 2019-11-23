import React from 'react';
import { connect } from 'react-redux';
import SalesSearch from '../components/SalesSearch';
import '../assets/styles/containers/Sales.scss';
import ProductList from '../components/ProductList';

const Inventory = ({ user }) => {
  return (
    <>
      <div id="salesItems">
        <div id="salesItemsHeader" className="h-6 border-bottom bg-white">
          <div />
          <h3 className="mb-0">Inventario</h3>
          <SalesSearch />
        </div>
        <ProductList available={true} />
      </div>
    </>
  );
};
const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps, null)(Inventory);
