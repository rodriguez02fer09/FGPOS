import React from "react";
import SalesSearch from "../components/SalesSearch";
import "../assets/styles/containers/Sales.scss";
import ProductList from "../components/ProductList";

class Inventory extends React.Component {
  render() {
    return (
      <>
        <div id="salesItems">
          <div id="salesItemsHeader" className="h-6 border-bottom bg-white">
            <div />
            <h3 className="mb-0">Inventario</h3>
            <SalesSearch />
          </div>
          <ProductList />
        </div>
      </>
    );
  }
}

export default Inventory;
