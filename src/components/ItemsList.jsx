import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import '../assets/styles/components/ItemsList.scss';

const ItemsList = ({ items }) => {
  return (
    <main id="itemsList">
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        ></Item>
      ))}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  null
)(ItemsList);
