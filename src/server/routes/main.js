import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import reducer from '../../frontend/reducers';
import render from '../render';

require('dotenv').config();

const main = async (req, res, next) => {
  try {
    let initialState;
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

      initialState = {
        user,
        products: [{
          id: "1",
          name: "Burrito",
          creationDate: new Date(),
          unitaryPrice: 8000,
          description: "soy un lindo burrito",
          clientPrice: 10000,
          soldUnits: 10,
          boughtUnits: 20,
          active: true,
          image:
            "https://images.pexels.com/photos/327168/pexels-photo-327168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: "2",
          name: "Pancakes",
          creationDate: new Date(),
          unitaryPrice: 8000,
          description: "soy un lindo burrito",
          clientPrice: 10000,
          soldUnits: 10,
          boughtUnits: 20,
          active: true,
          image:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=blur-close-up-dairy-product-376464.jpg&fm=jpg"
        },
        {
          id: "3",
          name: "Salmon",
          creationDate: new Date(),
          unitaryPrice: 8000,
          description: "soy un lindo burrito",
          clientPrice: 10000,
          soldUnits: 10,
          boughtUnits: 20,
          active: true,
          image:
            "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: "4",
          name: "Salmon",
          creationDate: new Date(),
          unitaryPrice: 8000,
          description: "soy un lindo burrito",
          clientPrice: 10000,
          soldUnits: 10,
          boughtUnits: 20,
          active: true,
          image:
            "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
          id: "5",
          name: "Salmon",
          creationDate: new Date(),
          unitaryPrice: 8000,
          description: "soy un lindo burrito",
          clientPrice: 10000,
          soldUnits: 10,
          boughtUnits: 20,
          active: true,
          image:
            "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }],
        cartItems: [],
        cartTotalPrice: 0
      };

    } catch (err) {
      initialState = {
        user: {},
        products: [],
        cartItems: [],
        cartTotalPrice: 0
      };
    }
    const isLogged = (initialState.user.id);
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={{}}
        >
          {renderRoutes(Routes(isLogged))}
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
