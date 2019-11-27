import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import Item from './Item';
import '../assets/styles/components/ItemsList.scss';
import { loadAvailableProducts } from '../actions';

const ItemsList = ({ items, loading, loadAvailableProducts }) => {
  const { addToast } = useToasts();

  const showError = (message) => {
    addToast(message, { appearance: 'error' });
  };

  useEffect(() => {
    loadAvailableProducts(showError);
  }, [loadAvailableProducts]);

  return (
    <>
      {!loading && (
        <main id="itemsList">
          {items.length > 0 && items.map(item => (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.clientPrice}
              image={item.image}
              units={item.units}
            />
          ))}
          {items.length === 0 && (
            <div id="noAvailableProducts">
              <h3>No hay productos disponibles para la venta en el momento</h3>
              <h2><span role="img" aria-label="Cara triste">😔</span></h2>
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
    items: state.products,
    loading: state.loading,
  };
};

const mapDispatchToProps = {
  loadAvailableProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemsList);
