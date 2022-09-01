const initialState = {
  cart: [],
  cartTotal: "",
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_ITEM":
      const newList = state.cart.filter((item) => item !== action.payload);
      return { ...state, cart: newList };
    case "CART_TOTAL":
      return { ...state, cartTotal: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
