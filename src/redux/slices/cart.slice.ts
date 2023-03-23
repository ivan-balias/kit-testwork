import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces/product.interface'

interface ICartProduct {
  product: IProduct
  count: number
}

const cartInitialState: ICartProduct[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = state.find((product) => product.product.id === action.payload.id)
      if(product) {
        product.count += 1
      }
      else {
        state.push({product: action.payload, count: 1})
      }
    },
    increaseProductCount: (state, action) => {
      const product = state.find((product) => product.product.id === action.payload.id)
      if(product) {
        product.count += 1
      }
    },
    decreaseProductCount: (state, action) => {
      const product = state.find((product) => product.product.id === action.payload.id)
      if(product && product.count > 1) {
        product.count -= 1
      }
    },
    removeProductFromCart: (state, action) => {
      console.log('removeProductFromCart', action.payload.product.id)
      return state.filter((product) => product.product.id !== action.payload.product.id)
      console.log('removeProductFromCart', state)
      // state = productWithoutRemoved
    }
  },
})

export const { addProductToCart, increaseProductCount, decreaseProductCount, removeProductFromCart } = cartSlice.actions
export default cartSlice.reducer