import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import LogOut from '../components/Logout';
import InvoicesList from '../components/InvoicesList';
import { loadInvoices } from '../actions';
import InvoicesStatistics from '../components/InvoicesStatistics';
import '../assets/styles/components/Invoices.scss';

const Invoices = ({ user, loadInvoices, loading, soldProducts }) => {
  const { addToast } = useToasts();

  const showError = (message) => {
    addToast(message, { appearance: 'error' });
  };

  useEffect(() => {
    loadInvoices(showError);
  }, [loadInvoices]);

  return (
    <>
      <div id="invoices">
        <div id="invoicesHeader" className="h-6 border-bottom bg-white">
          <div />
          <h3 className="mb-0">
            {user.name}
            {' '}
            - Estadísticas
          </h3>
          <LogOut />
        </div>
        <div id="invoicesInformation">
          <InvoicesStatistics />
          {!loading && soldProducts > 0 && <hr className="hr-third-color" />}
          <InvoicesList />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user, loading, soldProducts }) => {
  return {
    user,
    loading,
    soldProducts,
  };
};

const mapDispatchToProps = {
  loadInvoices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Invoices);
