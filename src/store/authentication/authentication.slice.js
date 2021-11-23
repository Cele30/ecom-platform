import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  initializeApp: false
}

const authentication = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      state.currentUser = action.payload
    },
    signOutUser: (state) => {
      state.currentUser = null
    },
    initializeApp: (state) => {
      state.initializeApp = true
    }
  }
});

export const {
  storeUser, signOutUser, initializeApp
} = authentication.actions

export default authentication.reducer