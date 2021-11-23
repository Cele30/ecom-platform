import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductCategories, getProductsByCategory } from '../../services/firebase'

export const retrieveProductCategories = createAsyncThunk(
  'products/retrieveProductCategories',
  async () => {
    const res = await getProductCategories()
    return res.docs.map(p => p.data())
  }
)

export const retrieveProductsByCategory = createAsyncThunk(
  'products/retrieveProductsByCategory',
  async (selectedProductCategory) => {
    const res = await getProductsByCategory(selectedProductCategory)
    return res.docs.map(p => p.data())
  }
)

const initialState = {
  products: [],
  productCategories: null,
  selectedProductCategory: null,
  loading: false
}

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProductCategory: (state, action) => {
      state.selectedProductCategory = action.payload
    }
  },
  extraReducers: {
    [retrieveProductsByCategory.pending]: (state) => {
      state.loading = true
    },
    [retrieveProductCategories.fulfilled]: (state, action) => {
      state.productCategories = action.payload
    },
    [retrieveProductsByCategory.fulfilled]: (state, action) => {
      state.products = state.products.concat(action.payload)
      state.loading = false
    },
  }
});

export const { setSelectedProductCategory } = products.actions

export default products.reducer