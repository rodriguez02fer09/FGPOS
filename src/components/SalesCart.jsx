import React from 'react';
import { connect } from 'react-redux';
import { deleteCart } from '../actions';
import '../assets/styles/components/SalesCart.scss';
import SalesCartItem from './SalesCartItem';
import emptyCart from '../assets/static/logos/empty-cart.png';

const SalesCart = ({ cartItems, cartTotalPrice, deleteCart }) => {
  const handleDeleteCart = () => {
    deleteCart();
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
              ></SalesCartItem>
            ))}
          </div>
          <div id="salesCartTotalPrice">
            <h4>Costo total</h4>
            <h4>$ {cartTotalPrice}</h4>
          </div>
          <button class="sales-cart-button button-success">Pagar</button>
          <button
            class="sales-cart-button button-danger"
            onClick={() => handleDeleteCart()}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
    cartTotalPrice: state.cartTotalPrice
  };
};

const mapDispatchToProps = {
  deleteCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesCart);
