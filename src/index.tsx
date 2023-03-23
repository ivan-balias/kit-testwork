import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import ProductsPage from './pages/ProdutsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

const router = createBrowserRouter([
  { path: '/', element: <ProductsPage /> },
  { path: '/:productId', element: <ProductPage /> },
  { path: '/cart', element: <CartPage /> },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
