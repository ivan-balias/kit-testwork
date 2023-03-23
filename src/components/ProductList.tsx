import React, { FC, ReactEventHandler } from 'react'
import styled from 'styled-components'
import { IProduct } from '../interfaces/product.interface'
import { Link } from 'react-router-dom'

interface Props {
  products: IProduct[],
  addToCart: (product: IProduct) => void
}

const ProductList: FC<Props> = ({ products, addToCart }) => {

  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>, product: IProduct) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <Wrap>
      {products.map(product => (
        <ProductCard key={product.id}>
          <Link to={`/${product.id}`}>
            <img className='image' src={product.image} alt={product.title} />
          </Link>
          <div className='title'>{product.title}</div>
          <div className='additionalInfo'>
            <span className='price'>
              {product.price.toFixed(2)} UAH
            </span>
            <button className='addButton' onClick={(e) => addToCartHandler(e, product)}>Add to cart</button>

          </div>
        </ProductCard>
      ))}
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px 0;
`

const ProductCard = styled('div')`
  width: calc(100% / 5 - 38px);
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .image {
    width: 200px;
    max-height: 200px;
    min-height: 200px;
    object-fit: contain;
    margin: 0 auto;
    display: block;
    cursor: pointer;
  }

  .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .additionalInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rating {
      font-size: 12px;
      display: flex;
      gap: 5px;
    }

    .price {
      font-weight: bold;
      font-size: 18px;
      color: #a868b6;
    }

    .addButton {
      background-color: #3b853b;
      color: #fff;
      border: none;
      padding: 7px 10px;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`


export default ProductList