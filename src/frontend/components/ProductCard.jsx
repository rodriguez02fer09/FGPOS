import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import NumberFormat from 'react-number-format';
import {
  addToCart,
  storeCreatedProducts,
  uptateProductRequest,
} from '../actions';
import '../assets/styles/components/ProductCard.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#app');

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      modalIsOpen: false,
      ...props,
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createProduct(event) {
    event.preventDefault();
    storeCreatedProducts();
  }

  // eslint-disable-next-line class-methods-use-this
  updateProduct(event) {
    event.preventDefault();
    uptateProductRequest(this.state);
  }

  openModal() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      modalIsOpen: true,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  afterOpenModal() {
    console.log('afterOpenModal');
  }

  closeModal(e) {
    e.stopPropagation();
    // eslint-disable-next-line react/no-unused-state
    this.setState({ modalIsOpen: false });
  }

  render() {
    const {
      _id,
      image,
      nameProduct,
      boughtUnits,
      soldUnits,
      description,
      unitaryPrice,
      clientPrice,
      active,
    } = this.props;
    const { modalIsOpen } = this.state;
    return (
      <>
        <div
          role="button"
          tabIndex={_id}
          onClick={() => this.openModal()}
          className="ProductCard"
        >
          <img src={image} alt={nameProduct} />
          <h4>{this.nameProduct}</h4>
          <h5>
            Unidades existentes:
            {boughtUnits - soldUnits}
          </h5>
          <Modal
            isOpen={modalIsOpen}
            customStyles={customStyles}
            onAfterOpen={this.aftermodalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Producto"
          >
            <section className="inventory_container--form">
              <h2>{nameProduct}</h2>
              <form className="product_container--form">
                Nombre del producto
                <input
                  name="name"
                  type="text"
                  onChange={this.handleInput}
                  defaultValue={nameProduct}
                />
                Descripción
                <input
                  name="description"
                  type="textarea"
                  onChange={this.handleInput}
                  defaultValue={description}
                />
                Precio unitario
                <NumberFormat
                  name="unitaryPrice"
                  value={unitaryPrice}
                  onChange={this.handleInput}
                  thousandSeparator={true}
                  prefix="$"
                />
                Precio al cliente
                <NumberFormat
                  name="clientPrice"
                  value={clientPrice}
                  onChange={this.handleInput}
                  thousandSeparator={true}
                  prefix="$"
                />
                Unidades Vendidas
                <input
                  name="soldUnits"
                  type="number"
                  onChange={this.handleInput}
                  defaultValue={soldUnits}
                />
                Unidades Compradas
                <input
                  name="boughtUnits"
                  type="number"
                  onChange={this.handleInput}
                  defaultValue={boughtUnits}
                />
                imagen
                <input
                  name="boughtUnits"
                  type="text"
                  onChange={this.handleInput}
                  defaultValue={image}
                />
                Activo
                <input
                  name="active"
                  type="checkBox"
                  onChange={this.handleInput}
                  checked={active}
                />
                <br />
                <button
                  className="inventory-cart-button button-success"
                  type="button"
                  onClick={_id ? this.updateProduct : this.createProduct}
                >
                  {_id !== undefined ? 'Actualizar' : 'Crear Producto'}
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
      </>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
  storeCreatedProducts,
  uptateProductRequest,
};

export default connect(null, mapDispatchToProps)(ProductCard);
