import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import "../assets/styles/components/ProductCard.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#app");

const ProductCard = props => {
  const { id, image, name, boughtUnits, soldUnits } = props;

  return (
    <div className="ProductCard">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>Unidades existentes: {boughtUnits - soldUnits}</h5>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
