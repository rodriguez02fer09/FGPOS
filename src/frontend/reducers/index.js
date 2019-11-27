const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let {
        cartItems,
      } = state;
      const index = cartItems.findIndex(item => action.payload.id === item.id);
      let add = true;
      if (index !== -1 && cartItems[index].quantity < cartItems[index].units) {
        cartItems[index].quantity++;
      } else if (index === -1) {
        cartItems = [action.payload, ...cartItems];
      } else {
        add = false;
      }

      return {
        ...state,
        cartTotalPrice: add ? state.cartTotalPrice + action.payload.price : state.cartTotalPrice,
        cartItems,
      };

    }
    case 'INCREASE_CART_ITEM_COUNT': {
      const {
        cartItems,
      } = state;
      let {
        cartTotalPrice,
      } = state;
      const index = cartItems.findIndex(item => action.payload === item.id);
      if (index !== -1 && cartItems[index].quantity < cartItems[index].units) {
        cartItems[index].quantity++;
        cartTotalPrice += cartItems[index].price;
      }
      return {
        ...state,
        cartTotalPrice,
        cartItems,
      };
    }
    case 'DECREASE_CART_ITEM_COUNT': {
      const {
        cartItems,
      } = state;
      let {
        cartTotalPrice,
      } = state;
      const index = cartItems.findIndex(item => action.payload === item.id);
      if (index !== -1) {
        const element = cartItems[index];
        if (element.quantity === 1) {
          cartItems.splice(index, 1);
        } else {
          element.quantity--;
        }
        cartTotalPrice -= element.price;
      }
      return {
        ...state,
        cartTotalPrice,
        cartItems,
      };
    }
    case 'DEFINE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SHOW_CART_CHECKOUT_MODAL':
      return {
        ...state,
        showCartCheckoutModal: true,
        fullScreenCart: false,
      };
    case 'HIDE_CART_CHECKOUT_MODAL':
      return {
        ...state,
        showCartCheckoutModal: false,
      };
    case 'DELETE_CART':
      return {
        ...state,
        cartTotalPrice: 0,
        cartItems: [],
      };
    case 'START_PAYMENT':
      return {
        ...state,
        makingPayment: true,
      };
    case 'END_PAYMENT':
      return {
        ...state,
        makingPayment: false,
        showCartCheckoutModal: false,
      };
    case 'RESET_PRODUCTS':
      return {
        ...state,
        loading: true,
        products: [],
      };
    case 'STORE_LOADED_PRODUCTS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'STORE_LOADED_INVOICES':
      return {
        ...state,
        loading: false,
        invoices: action.payload.invoices,
        totalProducts: action.payload.totalProducts,
        soldProducts: action.payload.soldProducts,
        earnedMoney: action.payload.earnedMoney,
        investedMoney: action.payload.investedMoney,
      };
    case 'LOADING_AUTH':
      return {
        ...state,
        loadingAuth: action.payload,
      };
    case 'SHOW_FULL_SCREEN_CART':
      return {
        ...state,
        showCartCheckoutModal: false,
        fullScreenCart: action.payload,
      };
    case 'RESET_SYSTEM':
      return {
        ...state,
        loading: true,
        products: [],
        invoices: [],
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
        loadingAuth: false,
        makingPayment: false,
      };
    default:
      return state;
  }
};

export default reducer;
