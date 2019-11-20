import React from "react";
import { connect } from "react-redux";
import { LoadProduct } from "../actions";
import "../assets/styles/components/ProductCard.scss";
import Modal from "react-modal";
import NumberFormat from "react-number-format";

const customStyles = {
  content: {
    top: "80%",
    left: "80%",
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
          <section className="inventory_container--form">
            <h2>{this.props.name}</h2>
            <form>
              <label id="description">Descripción</label>
              <input
                name="description"
                type="textarea"
                defaultValue={this.props.description}
              />
              <label id="unitaryPrice">Precio unitario</label>
              <NumberFormat
                name="unitaryPrice"
                value={this.props.unitaryPrice}
                thousandSeparator={true}
                prefix={"$"}
              />
              <label id="clientPrice">Precio al cliente</label>
              <NumberFormat
                name="clientPrice"
                value={this.props.clientPrice}
                thousandSeparator={true}
                prefix={"$"}
              />
              <label id="soldUnits">Unidades Vendidas</label>
              <input
                name="soldUnits"
                type="number"
                defaultValue={this.props.soldUnits}
              />
              <label id="boughtUnits">Unidades Compradas</label>
              <input
                name="boughtUnits"
                type="number"
                defaultValue={this.props.boughtUnits}
              />
              <label id="active">Activo</label>
              <input
                name="active"
                type="checkBox"
                checked={this.props.active}
              />
              <br />
              <button
                className="inventory-cart-button button-success"
                type="button"
              >
                Guardar
              </button>
              <button
                className="inventory-cart-button button-danger"
                type="button"
                onClick={this.closeModal}
              >
                Cancelar
              </button>
            </form>
          </section>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = {
  LoadProduct
};

export default connect(null, mapDispatchToProps)(ProductCard);
