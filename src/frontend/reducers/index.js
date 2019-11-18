const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let {
        cartItems,
      } = state;
      const index = cartItems.findIndex(item => action.payload.id === item.id);
      if (index !== -1) {
        cartItems[index].quantity++;
      } else {
        cartItems = [action.payload, ...cartItems];
      }
      return {
        ...state,
        cartTotalPrice: state.cartTotalPrice + action.payload.price,
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
      if (index !== -1) {
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
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'DELETE_CART':
      return {
        ...state,
        cartTotalPrice: 0,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default reducer;
