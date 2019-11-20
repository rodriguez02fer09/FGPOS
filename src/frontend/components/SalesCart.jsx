import React from 'react';
import { connect } from 'react-redux';
import { deleteCart, showCartCheckoutModal } from '../actions';
import '../assets/styles/components/SalesCart.scss';
import SalesCartItem from './SalesCartItem';
import emptyCart from '../assets/static/logos/empty-cart.png';
import SalesCartCheckoutModal from './SalesCartCheckoutModal';

const SalesCart = ({ cartItems, cartTotalPrice, deleteCart, showCartCheckoutModal, show }) => {
  const handleDeleteCart = () => {
    deleteCart();
  };

  const handleShowCartCheckoutModal = () => {
    showCartCheckoutModal();
  };

  return (
    <>
      <div id="salesCartHeader" className="h-6 border-bottom">
        <h3 className="mb-0">Carrito</h3>
      </div>
      {cartItems.length === 0 && (
        <div id="salesCartEmpty" className="no-select">
          <img src={emptyCart} alt="Carrito vació" />
          <h4>Tu carrito esta vacío</h4>
          <h5>Selecciona un elemento para añadirlo</h5>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <div id="salesCartItems">
            {cartItems.map(cartItem => (
              <SalesCartItem
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.name}
                price={cartItem.price}
                quantity={cartItem.quantity}
                image={cartItem.image}
              />
            ))}
          </div>
          <div id="salesCartTotalPrice">
            <h4>Costo total</h4>
            <h4>
              $
              {' '}
              {cartTotalPrice}
            </h4>
          </div>
          <button className="sales-cart-button button-success" type="button" onClick={() => handleShowCartCheckoutModal()}>Pagar</button>
          <button
            className="sales-cart-button button-danger"
            type="button"
            onClick={() => handleDeleteCart()}
          >
            Vaciar carrito
          </button>
          {show && <SalesCartCheckoutModal />}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    cartTotalPrice: state.cartTotalPrice,
    show: state.showCartCheckoutModal,
  };
};

const mapDispatchToProps = {
  deleteCart,
  showCartCheckoutModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalesCart);
