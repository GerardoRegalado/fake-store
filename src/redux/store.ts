// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer.ts';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
export type RootState = ReturnType<typeof store.getState>
export default store;
