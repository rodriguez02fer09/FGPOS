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

export const resetSystem = payload => ({
  type: 'RESET_SYSTEM',
});

export const storeLoadedProducts = payload => ({
  type: 'STORE_LOADED_PRODUCTS',
  payload,
});

export const storeLoadedInvoices = payload => ({
  type: 'STORE_LOADED_INVOICES',
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

export const stopLoading = () => ({
  type: 'STOP_LOADING',
});

export const registerRequest = (payload, callback) => {
  return (dispatch) => {
    dispatch(loadingAuth(true));
    axios.post('/auth/sign-up', {
      ...payload,
    }).then((data) => {
      callback('success', 'Tu cuenta fue creada de forma exitosa');
      setTimeout(() => {
        dispatch(loadingAuth(false));
        window.location.href = '/login';
      }, 3000);
    }).catch((err) => {
      console.log(err);
      callback('error', 'Se presentó un error creando tu cuenta');
      dispatch(loadingAuth(false));
    });
  };
};

export const loginRequest = ({
  email,
  password,
}, callback) => {
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
      callback('Credenciales inválidas');
      dispatch(loadingAuth(false));
    });
  };
};

export const loadAvailableProducts = (callback) => {
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
        dispatch(stopLoading());
        callback('No fue posible cargar los productos');
      });
  };
};

export const loadInvoices = (callback) => {
  return (dispatch) => {
    dispatch(resetSystem());
    axios.get('/api/products')
      .then(({
        data,
      }) => {
        const products = data.data;
        axios.get('/api/invoices')
          .then(({
            data,
          }) => {
            const invoices = data.data;
            let soldProducts = 0;
            let totalProducts = 0;
            let investedMoney = 0;
            let earnedMoney = 0;

            products.forEach((product) => {
              totalProducts += product.boughtUnits;
              soldProducts += product.soldUnits;
              investedMoney += product.boughtUnits * product.unitaryPrice;
              earnedMoney += product.soldUnits * product.clientPrice;
            });
            dispatch(storeLoadedProducts(products));
            dispatch(storeLoadedInvoices({
              invoices,
              soldProducts,
              totalProducts,
              investedMoney,
              earnedMoney,
            }));
          })
          .catch((err) => {
            console.log(err);
            dispatch(stopLoading());
            callback('No fue posible cargar las estadísticas');
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
        callback('No fue posible cargar las estadísticas');
      });
  };
};

export const makePayment = ({
  cartTotalPrice,
  cartItems,
  creationDate,
}, callback) => {
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
        callback('success', 'Factura generada de forma exitosa');
        dispatch(loadAvailableProducts());
      })
      .catch((err) => {
        dispatch(stopLoading());
        callback('error', 'No fue posible generar la factura');
        console.log(err);
      });
  };
};

export const showFullScreenCart = payload => ({
  type: 'SHOW_FULL_SCREEN_CART',
  payload,
});
