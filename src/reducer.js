import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newAmount = item.amount + 1;
    newCart.set(action.payload.id, { ...item, amount: newAmount });
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.amount === 1) {
      newCart.delete(action.payload.id);
    } else {
      const newAmount = item.amount - 1;
      newCart.set(action.payload.id, { ...item, amount: newAmount });
    }
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    return {
      ...state,
      loading: false,
      cart: new Map(action.payload.data.map((item) => [item.id, item])),
    };
  }

  throw new Error(`no matching action type: ${action}`);
};

export default reducer;
