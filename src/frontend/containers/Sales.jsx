import React from 'react';
import SalesSearch from '../components/SalesSearch';
import '../assets/styles/containers/Sales.scss';
import SalesCart from '../components/SalesCart';
import ItemsList from '../components/ItemsList';

class Sales extends React.Component {
  render() {
    return (
      <>
        <div id="salesItems">
          <div id="salesItemsHeader" className="h-6 border-bottom bg-white">
            <div />
            <h3 className="mb-0">Ventas</h3>
            <SalesSearch />
          </div>
          <ItemsList available={true} />
        </div>
        <div id="salesCart">
          <SalesCart />
        </div>
      </>
    );
  }
}

export default Sales;
