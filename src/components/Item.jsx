import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../assets/styles/components/Item.scss';

const Item = props => {
  const { id, image, name, price, addToCart } = props;

  const addItemToCart = () => {
    addToCart({ id, image, name, price, quantity: 1 });
  };

  return (
    <div class="item" onClick={addItemToCart}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>${price}</h5>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
