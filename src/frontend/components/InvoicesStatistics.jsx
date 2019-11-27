import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/InvoicesStatistics.scss';

const InvoicesStatistics = ({ soldProducts, loading, totalProducts, earnedMoney, investedMoney }) => {
  return (
    <>
      {!loading && (
        <div id="invoicesStatisticsContainer">
          <div id="invoicesStatististicSoldUnits" className="invoices-statistic">
            <h3>
              {soldProducts}
              {' '}
/
              {' '}
              {totalProducts}
            </h3>
            <h5>
              <i className="fas fa-balance-scale" />
&nbsp;Unidades vendidas
            </h5>
          </div>
          <div id="invoicesStatististicNetValue" className="invoices-statistic">
            <h3>
$
              {earnedMoney - investedMoney}
            </h3>
            <h5>
              <i className="fas fa-hand-holding-usd" />
&nbsp;Ganancia neta
            </h5>
          </div>
          <div id="invoicesStatististicEarned" className="invoices-statistic">
            <h3>
$
              {earnedMoney}
            </h3>
            <h5>
              <i className="fas fa-chevron-up" />
&nbsp;Ingresos
            </h5>
          </div>
          <div id="invoicesStatististicInvested" className="invoices-statistic">
            <h3>
$
              {investedMoney}
            </h3>
            <h5>
              <i className="fas fa-chevron-down" />
&nbsp;Gastos
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ soldProducts, loading, totalProducts, earnedMoney, investedMoney }) => {
  return {
    soldProducts,
    loading,
    totalProducts,
    earnedMoney,
    investedMoney,
  };
};

export default connect(
  mapStateToProps,
  null,
)(InvoicesStatistics);
