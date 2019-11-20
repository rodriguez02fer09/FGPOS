import axios from "axios";

export const setError = payload => ({
  type: "SET_ERROR",
  payload
});

export const addToCart = payload => ({
  type: "ADD_TO_CART",
  payload
});

export const increaseCartItemCount = payload => ({
  type: "INCREASE_CART_ITEM_COUNT",
  payload
});

export const decreaseCartItemCount = payload => ({
  type: "DECREASE_CART_ITEM_COUNT",
  payload
});

export const deleteCart = payload => ({
  type: "DELETE_CART",
  payload
});

export const loginRequest = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const registerRequest = payload => ({
  type: "REGISTER_REQUEST",
  payload
});

export const resetProducts = payload => ({
  type: "RESET_PRODUCTS",
  payload
});

export const storeLoadedProducts = payload => ({
  type: "STORE_LOADED_PRODUCTS",
  payload
});

export const showCartCheckoutModal = payload => ({
  type: "SHOW_CART_CHECKOUT_MODAL",
  payload
});

export const hideCartCheckoutModal = payload => ({
  type: "HIDE_CART_CHECKOUT_MODAL",
  payload
});

export const startPayment = payload => ({
  type: "START_PAYMENT",
  payload
});

export const endPayment = payload => ({
  type: "END_PAYMENT",
  payload
});

export const loadAvailableProducts = payload => {
  return dispatch => {
    dispatch(resetProducts());
    dispatch(deleteCart());
    axios
      .get("/api/products")
      .then(({ data }) => {
        const products = data.data.filter(
          product => product.active && product.units > 0
        );
        dispatch(storeLoadedProducts(products));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const makePayment = ({ cartTotalPrice, cartItems, creationDate }) => {
  return dispatch => {
    dispatch(startPayment());
    axios
      .post("/api/invoices", {
        cartTotalPrice,
        cartItems,
        creationDate
      })
      .then(({ data }) => {
        dispatch(endPayment());
        dispatch(loadAvailableProducts());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// Actions Products

export const LoadProductRequest = payload => ({
  type: "LOADPRODUCT_REQUEST",
  payload
});

export const LoadProduct = payload => {
  return dispatch => {
    axios
      .get("api/product", payload)
      .then(result => dispatch(LoadProductRequest(result)))
      .catch(err => dispatch(setError(error)));
  };
};
