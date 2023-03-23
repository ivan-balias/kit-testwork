import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces/product.interface'
import { getProducts } from '../../api/getProducts'

interface initialState {
  products: IProduct[] | [],
  loading: boolean,
  error?: string,
}

const productsInitialState: initialState = {
  products: [],
  loading: false,
  error: '',
}

export const getProductsList: any = createAsyncThunk<IProduct[]>('products/getProductsList', async () => {
  return await getProducts()
})

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsList.pending, (state) => {
        state.loading = true
      })
      .addCase(getProductsList.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
      })
      .addCase(getProductsList.rejected, (state, action) => {
        state.error = action.error.message
        state.loading = false
      })
  },
})




export default productsSlice.reducer