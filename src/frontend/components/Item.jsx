import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../assets/styles/components/Item.scss';

const Item = (props) => {
  const { id, image, name, price, addToCart, units } = props;

  const addItemToCart = () => {
    addToCart({ id, image, name, price, quantity: 1, units });
  };

  return (
    <div className="item" onClick={addItemToCart} role="listitem">
      <img src={image} alt={name} />
      <h4>
        {name}
        {' '}
(
        {units}
)
      </h4>
      <h5>
        $
        {' '}
        {price}
      </h5>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(Item);
