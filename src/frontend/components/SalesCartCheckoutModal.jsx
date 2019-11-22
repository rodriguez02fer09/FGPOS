import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import SalesCartCheckoutItem from './SalesCartCheckoutItem';
import { hideCartCheckoutModal, makePayment } from '../actions';
import '../assets/styles/components/SalesCartCheckoutModal.scss';

const SalesCartCheckoutModal = ({ show, cartItems, cartTotalPrice, hideCartCheckoutModal, makePayment, makingPayment, user }) => {

  const [values, setValues] = useState({
    cash: 0,
    creationDate: new Date(),
  });

  Modal.setAppElement('#app');

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      justifyContent: 'center',
    },
    content: {
      marginTop: '60px',
      left: 'unset',
      right: 'unset',
      bottom: 'unset',
      marginRight: 'unset',
      transform: 'none',
      minWidth: '300px',
      borderColor: 'grey',
    },
  };

  const handleCashInput = (event) => {
    setValues({
      ...values,
      cash: parseInt(event.target.value, 10) || 0,
    });
  };

  const handleCloseModal = () => {
    hideCartCheckoutModal();
  };

  const handlePayment = () => {
    makePayment({ cartTotalPrice, cartItems, creationDate: values.creationDate.getTime() });
  };

  return (
    <Modal
      isOpen={show}
      style={customStyles}
    >
      <div id="invoiceInformation">
        <div id="invoiceTitle">
          <h4>{user.name}</h4>
          <h5>Factura</h5>
        </div>
        <div id="invoiceDate">
          <h5>
            {values.creationDate.toLocaleDateString()}
            {' '}
            {values.creationDate.toLocaleTimeString()}
          </h5>
        </div>
      </div>
      <hr className="sales-cart-hr" />
      <div className="text-center">
        <input id="salesCartCheckoutModalCashInput" type="number" placeholder={cartTotalPrice} pattern="[0-9]" min="0" onChange={handleCashInput} disabled={makingPayment} />
        <h6>Efectivo recibido</h6>
      </div>
      <hr className="sales-cart-hr" />
      <div id="salesCartCheckoutItemsContainer">
        {cartItems.map(cartItem => (
          <SalesCartCheckoutItem
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            quantity={cartItem.quantity}
            showQuantity={true}
          />
        ))}
      </div>
      <hr className="sales-cart-hr" />
      <SalesCartCheckoutItem
        key="total"
        name="TOTAL"
        price={cartTotalPrice}
        quantity={1}
        showQuantity={false}
      />
      <hr className="sales-cart-hr" />
      {
        values.cash >= cartTotalPrice && (
          <SalesCartCheckoutItem
            key="cashBack"
            name="CAMBIO"
            price={values.cash - cartTotalPrice}
            quantity={1}
            showQuantity={false}
          />
        )}
      <div id="salesCartCheckoutButtons">
        {!makingPayment && (
          <>
            <button className="sales-cart-button button-success" type="button" onClick={() => handlePayment()} disabled={values.cash < cartTotalPrice}><i className="fas fa-money-bill-wave" /></button>
            <button className="sales-cart-button button-danger" type="button" onClick={() => handleCloseModal()}><i className="fas fa-window-close" /></button>
          </>
        )}
        {makingPayment && <i className="fas fa-spin fa-spinner fa-2x" />}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.showCartCheckoutModal,
    cartItems: state.cartItems,
    cartTotalPrice: state.cartTotalPrice,
    makingPayment: state.makingPayment,
    user: state.user,
  };
};

const mapDispatchToProps = {
  hideCartCheckoutModal,
  makePayment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SalesCartCheckoutModal);
