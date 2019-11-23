import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import NumberFormat from 'react-number-format';
import { addToCart } from '../actions';
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
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  createProduct() {
    console.log('creando producto');
  }

  // eslint-disable-next-line class-methods-use-this
  updateProduct() {
    console.log('update product');
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
      id,
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
          tabIndex={id}
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
              <form>
                Descripción
                <input
                  htmlFor="description"
                  type="textarea"
                  defaultValue={description}
                />
                Precio unitario
                <NumberFormat
                  htmlFor="unitaryPrice"
                  value={unitaryPrice}
                  thousandSeparator={true}
                  prefix="$"
                />
                Precio al cliente
                <NumberFormat
                  htmlFor="clientPrice"
                  value={clientPrice}
                  thousandSeparator={true}
                  prefix="$"
                />
                Unidades Vendidas
                <input
                  htmlFor="soldUnits"
                  type="number"
                  defaultValue={soldUnits}
                />
                Unidades Compradas
                <input
                  htmlFor="boughtUnits"
                  type="number"
                  defaultValue={boughtUnits}
                />
                Activo
                <input
                  htmlFor="active"
                  type="checkBox"
                  checked={active}
                />
                <br />
                <button
                  className="inventory-cart-button button-success"
                  type="button"
                  onClick={id ? this.updateProduct() : this.createProduct()}
                >
                  {id ? 'Actualizar' : 'Crear Producto'}
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
};

export default connect(null, mapDispatchToProps)(ProductCard);
