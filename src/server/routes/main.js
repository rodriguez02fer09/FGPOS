import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import reducer from '../../frontend/reducers';
import render from '../render';
import { ToastProvider } from 'react-toast-notifications';

require('dotenv').config();

const main = async (req, res, next) => {
  try {
    const { email, name, id } = req.cookies;
    let user = {};
    if (email || name || id) {
      user = {
        id,
        email,
        name,
      };
    }

    const initialState = {
      cartItems: [],
      cartTotalPrice: 0,
      fullScreenCart: false,
      invoices: [],
      loading: true,
      makingPayment: false,
      products: [],
      showCartCheckoutModal: false,
      user,
      loadingAuth: false,
      soldProducts: 0,
      totalProducts: 0,
      investedMoney: 0,
      earnedMoney: 0
    };

    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <ToastProvider>
          <StaticRouter
            location={req.url}
            context={{}}
          >
            {renderRoutes(Routes(isLogged))}
          </StaticRouter>
        </ToastProvider>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
