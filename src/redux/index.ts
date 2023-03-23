import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import cartSlice from './slices/cart.slice'

const rootReducer = combineReducers({
  products: productsSlice,
  cart: cartSlice
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch