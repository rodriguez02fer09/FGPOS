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

export const LoginRequest = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const RegisterRequest = payload => ({
  type: "REGISTER_REQUEST",
  payload
});
