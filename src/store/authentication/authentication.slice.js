import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  initializeApp: false,
  loading: true,
};

const authentication = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signOutUser: state => {
      state.currentUser = null;
    },
    initializeApp: state => {
      state.initializeApp = true;
    },
    uninitializedApp: state => {
      state.initializeApp = false;
    },
  },
});

export const { storeUser, signOutUser, initializeApp, uninitializedApp } =
  authentication.actions;

export default authentication.reducer;
