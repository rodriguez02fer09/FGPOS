import React from 'react';
import { connect } from 'react-redux';
import { deleteCart, showCartCheckoutModal, showFullScreenCart } from '../actions';
import '../assets/styles/components/SalesCart.scss';
import SalesCartItem from './SalesCartItem';
import emptyCart from '../assets/static/logos/empty-cart.png';
import SalesCartCheckoutModal from './SalesCartCheckoutModal';

const SalesCart = ({ cartItems, cartTotalPrice, deleteCart, showCartCheckoutModal, show, fullScreenCart, showFullScreenCart }) => {
  const handleDeleteCart = () => {
    deleteCart();
  };

  const handleShowCartCheckoutModal = () => {
    showCartCheckoutModal();
  };

  return (
    <>
      <div id="salesCartHeader" className="h-6 border-bottom">
        <div className="salesCartFullScreenClose">&nbsp;</div>
        <h3>Carrito</h3>
        <h3 className="salesCartFullScreenClose" onClick={() => showFullScreenCart(false)}><i className="fas fa-times" /></h3>
      </div>
      <div />
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
          <div id="salesCartButtonsContainer">
            <button className="sales-cart-button button-success" type="button" onClick={() => handleShowCartCheckoutModal()}>Pagar</button>
            <button
              className="sales-cart-button button-danger"
              type="button"
              onClick={() => handleDeleteCart()}
            >
              Vaciar carrito
            </button>
          </div>
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
    fullScreenCart: state.fullScreenCart,
  };
};

const mapDispatchToProps = {
  deleteCart,
  showCartCheckoutModal,
  showFullScreenCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalesCart);
