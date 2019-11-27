import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/InvoicesList.scss';
import Invoice from './Invoice';

const InvoicesList = ({ invoices, loading }) => {
    return (
        <>
            {loading && (

                <main id="invoicesLoadingContainer">
                    <i className="fas fa-spin fa-spinner fa-2x" />
                </main>
            )}
            {!loading &&
                <>
                    <h3 id="invoicesGeneratedTitle">Facturas generadas</h3>
                    <main id="invoicesList">
                        {invoices.map(invoice => (
                            <Invoice key={invoice._id} creationDate={new Date(invoice.creationDate)} totalPrice={invoice.totalPrice} soldProducts={calculateSoldProducts(invoice.soldProducts)} />
                        ))}
                    </main>
                </>
            }
        </>
    );
};

const calculateSoldProducts = (soldProducts) => {
    let numberOfSoldProducts = 0;
    soldProducts.forEach(product => {
        numberOfSoldProducts += product.soldUnits;
    });
    return numberOfSoldProducts;
};

const mapStateToProps = ({ invoices, loading }) => {
    return {
        invoices,
        loading
    };
};

export default connect(
    mapStateToProps,
    null
)(InvoicesList);
