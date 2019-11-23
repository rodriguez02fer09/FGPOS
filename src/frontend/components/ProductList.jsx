import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import '../assets/styles/components/ProductList.scss';
import { loadAllProducts } from '../actions';

const ProductList = ({ products, loading, loadAllProducts }) => {
  useEffect(() => {
    loadAllProducts();
  }, [loadAllProducts]);

  return (
    <>
      {!loading && (
        <main id="ProductList">
          {products.length > 0 &&
            products.map(product => (
              <ProductCard
                id={product._id}
                key={product._id}
                nameProduct={product.name}
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
          {products.length === 0 && (
            <div id="noAvailableProducts">
              <h3>No hay productos disponibles para la venta en el momento</h3>
              <h2>
                <span role="img" aria-label="Cara triste">
                  😔
                </span>
              </h2>
            </div>
          )}
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  loadAllProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
)(ProductList);
