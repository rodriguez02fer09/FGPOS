import axios from 'axios';

export const addToCart = payload => ({
  type: 'ADD_TO_CART',
  payload,
});

export const increaseCartItemCount = payload => ({
  type: 'INCREASE_CART_ITEM_COUNT',
  payload,
});

export const decreaseCartItemCount = payload => ({
  type: 'DECREASE_CART_ITEM_COUNT',
  payload,
});

export const deleteCart = payload => ({
  type: 'DELETE_CART',
  payload,
});

export const resetProducts = payload => ({
  type: 'RESET_PRODUCTS',
  payload,
});

export const storeLoadedProducts = payload => ({
  type: 'STORE_LOADED_PRODUCTS',
  payload,
});

export const showCartCheckoutModal = payload => ({
  type: 'SHOW_CART_CHECKOUT_MODAL',
  payload,
});

export const hideCartCheckoutModal = payload => ({
  type: 'HIDE_CART_CHECKOUT_MODAL',
  payload,
});

export const startPayment = payload => ({
  type: 'START_PAYMENT',
  payload,
});

export const endPayment = payload => ({
  type: 'END_PAYMENT',
  payload,
});

export const loadingAuth = payload => ({
  type: 'LOADING_AUTH',
  payload,
});

export const defineUser = payload => ({
  type: 'DEFINE_USER',
  payload,
});

export const registerRequest = (payload) => {
  return (dispatch) => {
    dispatch(loadingAuth(true));
    axios.post('/auth/sign-up', {
      ...payload,
    }).then((data) => {
      dispatch(loadingAuth(false));
      window.location.href = '/login';
    }).catch((err) => {
      dispatch(loadingAuth(false));
      console.log(err);
    });
  };
};

export const loginRequest = ({
  email,
  password,
}) => {
  return (dispatch) => {
    dispatch(loadingAuth(true));
    axios.post('/auth/sign-in', {}, {
      auth: {
        username: email,
        password,
      },
    }).then(({
      data,
    }) => {
      document.cookie = `email=${data.email}`;
      document.cookie = `name=${data.name}`;
      document.cookie = `id=${data.id}`;
      window.location.href = '/sales';
      dispatch(loadingAuth(false));
    }).catch((err) => {
      console.log(err);
      dispatch(loadingAuth(false));
      console.log(err);
    });
  };
};

export const loadAvailableProducts = (payload) => {
  return (dispatch) => {
    dispatch(resetProducts());
    dispatch(deleteCart());
    axios.get('/api/products')
      .then(({
        data,
      }) => {
        const products = data.data.filter(product => product.active && product.units > 0);
        dispatch(storeLoadedProducts(products));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const makePayment = ({
  cartTotalPrice,
  cartItems,
  creationDate,
}) => {
  return (dispatch) => {
    dispatch(startPayment());
    axios.post('/api/invoices', {
      cartTotalPrice,
      cartItems,
      creationDate,
    })
      .then(({
        data,
      }) => {
        dispatch(endPayment());
        dispatch(loadAvailableProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const showFullScreenCart = payload => ({
  type: 'SHOW_FULL_SCREEN_CART',
  payload,
});
