import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../api/getProduct'
import { IProduct } from '../../interfaces/product.interface'
import Layout from '../../components/Layout'
import Loader from '../../components/loader'
import styled from 'styled-components'
import { addProductToCart } from '../../redux/slices/cart.slice'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>()
  const [product, setProduct] = React.useState<IProduct | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const dispatch = useAppDispatch()

  const addToCart = () => {
    dispatch(addProductToCart(product))
  }

  useEffect(() => {
    const getProductInfo = async () => {
      setLoading(true)
      // @ts-ignore
      const product = await getProduct(+productId)
      setProduct(product)
      setLoading(false)
    }

    if (productId)
      getProductInfo()

  }, [productId])

  return (
    <Layout>
      {loading && <Loader />}
      {product && (
        <>
          <h1>{product.title}</h1>

          <Product>
            <img className='image' src={product.image} alt={product.title} />
            <div className='productInfo'>
              <p>Category: {product.category}</p>
              <p>Rating: {product.rating.rate} ({product.rating.count})</p>
              <p>{product.description}</p>
              <div className="price">
                <span>{product.price} UAH</span>

                <button className='addButton' onClick={addToCart}>Add to cart</button>
              </div>

            </div>
          </Product>
        </>
      )}
    </Layout>
  )
}

const Product = styled.div`
  display: flex;
  gap: 30px;

  .image {
    width: 400px;
    object-fit: contain;
  }

  .productInfo {
    p:first-child {
      margin-top: 0;
    }
  }
  
  .price {
    display: flex;
    gap: 20px;
    align-items: center;
    
    span {
      font-size: 20px;
      font-weight: bold;
      color: #a868b6;
    }
  }

  .addButton {
    background-color: #3b853b;
    color: #fff;
    border: none;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
  }
`

export default ProductPage