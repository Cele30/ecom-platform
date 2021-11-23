import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from './authentication/authentication.slice';
import productsReducer from './products/products.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authenticationReducer,
    products: productsReducer
  },
});