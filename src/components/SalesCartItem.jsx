import React from 'react';
import { connect } from 'react-redux';
import { increaseCartItemCount, decreaseCartItemCount } from '../actions';
import '../assets/styles/components/SalesCartItem.scss';

const SalesCartItem = props => {
  const {
    id,
    name,
    price,
    quantity,
    image,
    increaseCartItemCount,
    decreaseCartItemCount
  } = props;

  const increaseCount = () => {
    increaseCartItemCount(id);
  };

  const decreaseCount = () => {
    decreaseCartItemCount(id);
  };

  return (
    <div class="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-information">
        <h4>{name}</h4>
        <h5 class="cart-item-quantity no-select">
          <i class="fas fa-minus-circle" onClick={() => decreaseCount()}></i>
          &nbsp;{quantity}&nbsp;
          <i class="fas fa-plus-circle" onClick={() => increaseCount()}></i>
        </h5>
        <h5 class="cart-item-price">$ {price * quantity}</h5>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  increaseCartItemCount,
  decreaseCartItemCount
};

export default connect(
  null,
  mapDispatchToProps
)(SalesCartItem);
