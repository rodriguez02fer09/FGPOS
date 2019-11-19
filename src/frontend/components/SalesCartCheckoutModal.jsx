import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import SalesCartCheckoutItem from './SalesCartCheckoutItem';
import { hideCartCheckoutModal, makePayment } from '../actions';
import '../assets/styles/components/SalesCartCheckoutModal.scss';

const SalesCartCheckoutModal = ({ show, cartItems, cartTotalPrice, hideCartCheckoutModal, makePayment, makingPayment }) => {
  Modal.setAppElement('#app');

  const creationDate = new Date();

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

  const handleCloseModal = () => {
    hideCartCheckoutModal();
  };

  const handlePayment = () => {
    makePayment({ cartTotalPrice, cartItems, creationDate: creationDate.getTime() });
  };

  return (
    <Modal
      isOpen={show}
      style={customStyles}
    >
      <div id="invoiceInformation">
        <div id="invoiceTitle">
          <h4>FG POS</h4>
          <h5>Factura</h5>
        </div>
        <div id="invoiceDate">
          <h5>
            {creationDate.toLocaleDateString()}
            {' '}
            {creationDate.toLocaleTimeString()}
          </h5>
        </div>
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
      <div id="salesCartCheckoutButtons">
        {!makingPayment && (
          <>
            <button className="sales-cart-button button-success" type="button" onClick={() => handlePayment()}><i className="fas fa-money-bill-wave" /></button>
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
