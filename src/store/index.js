import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from './authentication/authentication.slice';
import productsReducer from './products/products.slice';
import cartReducer from './cart/cart.slice';

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  counter: counterReducer,
  auth: authenticationReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
