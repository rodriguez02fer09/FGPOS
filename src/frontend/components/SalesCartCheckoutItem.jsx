import React from 'react';
import '../assets/styles/components/SalesCartCheckoutItem.scss';

const SalesCartCheckoutItem = (props) => {
  const {
    name,
    price,
    quantity,
    showQuantity,
  } = props;

  return (
    <div className="cart-checkout-item">
      <div className="cart-checkout-item-information">
        <strong>{name}</strong>
        {' '}
        {showQuantity && (
          <span>
            (
            {quantity}
            )
          </span>
        )}
      </div>
      <div className="cart-checkout-item-price">
        $
        {' '}
        {price * quantity}
      </div>
    </div>
  );
};

export default SalesCartCheckoutItem;
