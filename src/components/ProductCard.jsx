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
class ProductCard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    console.log("afterOpenModal");
  }

  closeModal(e) {
    e.stopPropagation();
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div onClick={this.openModal} className="ProductCard">
        <img src={this.props.image} alt={this.props.name} />
        <h4>{this.props.name}</h4>
        <h5>
          Unidades existentes: {this.props.boughtUnits - this.props.soldUnits}
        </h5>
        <Modal
          isOpen={this.state.modalIsOpen}
          customStyles={customStyles}
          onAfterOpen={this.aftermodalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2>{this.props.name}</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input value={this.props.name} />
          </form>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(ProductCard);
