import React from 'react';
import '../assets/styles/components/Invoice.scss'

const Invoice = ({ creationDate, totalPrice, soldProducts }) => {
    return <div className="invoice-container">
        <div className="invoice-element">
            <h6>Fecha de creación</h6>
            <h5>
                {creationDate.toLocaleDateString()}
                {' '}
                {creationDate.toLocaleTimeString()}
            </h5>
            <hr className="hr-primary-color" />
            <h6>Total venta</h6>
            <h3>$ {totalPrice}</h3>
            <hr className="hr-primary-color" />
            <h6>Productos vendidos</h6>
            <h4>{soldProducts}</h4>
        </div>
    </div>
};

export default Invoice;