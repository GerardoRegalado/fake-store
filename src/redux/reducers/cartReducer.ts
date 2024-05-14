import { CartItem, CartState } from '../../libs/reduxTypes';
import { Product } from '../../libs/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cart: [],
  total: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.cart[existingIndex].qty += 1;
        state.total += state.cart[existingIndex].price;
      } else {
        const newItem: CartItem = { ...action.payload, qty: 1 };
        state.cart.push(newItem);
        state.total += newItem.price;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.cart.findIndex(item => item.id === action.payload);
      const existingItem = state.cart[index];

      if (existingItem) {
        state.total -= existingItem.price * existingItem.qty;
        state.cart.splice(index, 1);
      }
    },
    adjustQty(state, action: PayloadAction<{ id: number; qty: number }>) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        state.total -= item.price * item.qty;
        item.qty = action.payload.qty;
        state.total += item.price * item.qty;
      }
    }
  }
});

export const { addToCart, removeFromCart, adjustQty } = cartSlice.actions;
export default cartSlice.reducer;
