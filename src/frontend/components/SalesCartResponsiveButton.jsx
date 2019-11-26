import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/SalesCartResponsiveButton.scss';
import { showFullScreenCart } from '../actions'

const SalesCartResponsiveButton = ({ cartTotalItems, showFullScreenCart, fullScreenCart, makingPayment }) => {
    return <div id="salesCartResponsiveButtonContainer" className={(fullScreenCart || makingPayment) ? 'd-none' : ''}>
        <button id="salesCartResponsiveButton" onClick={() => showFullScreenCart(true)}><i className="fas fa-shopping-cart"></i>&nbsp;{cartTotalItems}</button>
    </div>
};

const mapStateToProps = ({ cartItems, fullScreenCart, makingPayment }) => {
    return {
        cartTotalItems: calculateTotalItems(cartItems),
        fullScreenCart,
        makingPayment
    };
};

const mapDispatchToProps = {
    showFullScreenCart
};

const calculateTotalItems = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
        total += item.quantity;
    });
    return total;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SalesCartResponsiveButton);