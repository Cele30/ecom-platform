import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.productId !== action.payload
      );
    },
    clearCart: state => {
      state.items = [];
    },
    addQtyToItem: (state, action) => {
      state.items = state.items.map(item => {
        if (item.productId === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }
        return item;
      });
    },
    minusQtyFromItem: (state, action) => {
      state.items = state.items.map(item => {
        if (item.productId === action.payload.id) {
          return {
            ...item,
            quantity:
              item.quantity > 1 ? item.quantity - action.payload.quantity : 1,
          };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  addQtyToItem,
  minusQtyFromItem,
} = cart.actions;

export default cart.reducer;
