import React, { FC, useEffect } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getProductsList } from '../../redux/slices/products.slice'
import { Link } from 'react-router-dom'
import { addProductToCart } from '../../redux/slices/cart.slice'
import Layout from '../../components/Layout'
import ProductList from '../../components/ProductList'
import Loader from '../../components/loader'

const ProductsPage: FC = () => {
  const { products, loading, error } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductsList())
  },[])

  const addToCart = (product: any) => {
    dispatch(addProductToCart(product))
  }

  return (
    <Layout>
      {loading && <Loader/>}
      <ProductList products={products} addToCart={addToCart} />
    </Layout>
  )
}

export default ProductsPage