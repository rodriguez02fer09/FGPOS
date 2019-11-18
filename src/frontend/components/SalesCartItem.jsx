import React from 'react';
import { connect } from 'react-redux';
import { increaseCartItemCount, decreaseCartItemCount } from '../actions';
import '../assets/styles/components/SalesCartItem.scss';

const SalesCartItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    image,
    increaseCartItemCount,
    decreaseCartItemCount,
  } = props;

  const increaseCount = () => {
    increaseCartItemCount(id);
  };

  const decreaseCount = () => {
    decreaseCartItemCount(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-information">
        <h4>{name}</h4>
        <h5 className="cart-item-quantity no-select">
          <i className="fas fa-minus-circle" onClick={() => decreaseCount()} role="term" />
          &nbsp;
          {quantity}
          &nbsp;
          <i className="fas fa-plus-circle" onClick={() => increaseCount()} role="term" />
        </h5>
        <h5 className="cart-item-price">
          $
          {' '}
          {price * quantity}
        </h5>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  increaseCartItemCount,
  decreaseCartItemCount,
};

export default connect(
  null,
  mapDispatchToProps,
)(SalesCartItem);
