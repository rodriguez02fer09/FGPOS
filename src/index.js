import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import App from "./routes/App";

const initialState = {
  cartItems: [],
  cartTotalPrice: 0,
  items: [
    {
      id: "1",
      name: "Burrito",
      price: 10000,
      image:
        "https://images.pexels.com/photos/327168/pexels-photo-327168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: "2",
      name: "Pancakes",
      price: 14000,
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=blur-close-up-dairy-product-376464.jpg&fm=jpg"
    },
    {
      id: "3",
      name: "Salmon",
      price: 24000,
      image:
        "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: "4",
      name: "Salmon",
      price: 24000,
      image:
        "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      id: "5",
      name: "Salmon",
      price: 24000,
      image:
        "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ],
  products: [
    {
      id: "1",
      name: "Burrito",
      clientPrice: new Date(),
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
      clientPrice: new Date(),
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
      clientPrice: new Date(),
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
      clientPrice: new Date(),
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
      clientPrice: new Date(),
      unitaryPrice: 8000,
      description: "soy un lindo burrito",
      clientPrice: 10000,
      soldUnits: 10,
      boughtUnits: 20,
      active: true,
      image:
        "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
