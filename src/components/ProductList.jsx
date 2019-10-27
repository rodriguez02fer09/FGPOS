import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import "../assets/styles/components/ProductList.scss";

const ProductList = ({ products }) => {
  return (
    <main id="ProductList">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.clientPrice}
          image={product.image}
          boughtUnits={product.boughtUnits}
          soldUnits={product.soldUnits}
          active={product.active}
          clientPrice={product.clientPrice}
          unitaryPrice={product.unitaryPrice}
          description={product.description}
        ></ProductCard>
      ))}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductList);
