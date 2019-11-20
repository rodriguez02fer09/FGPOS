import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import { LoadProduct } from "../actions";
import "../assets/styles/components/ProductList.scss";

const ProductList = ({ products, loading, LoadProduct }) => {
  useEffect(() => {
    LoadProduct();
  }, [LoadProduct]);

  return (
    <>
      {!loading && (
        <main id="ProductList">
          {products.length > 0 &&
            products.map(product => (
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
              />
            ))}
        </main>
      )}
      {loading && (
        <main id="salesLoadingContainer">
          <i className="fas fa-spin fa-spinner fa-2x" />
        </main>
      )}
    </>
  );
};

const mapDispatchToProps = {
  LoadProduct
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
