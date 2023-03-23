import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Container from '../UI/Container'
import StyledLink from '../UI/StyledLink'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Link } from 'react-router-dom'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { decreaseProductCount, increaseProductCount, removeProductFromCart } from '../../redux/slices/cart.slice'

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart)

  const cartItemsCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.count, 0)
  }, [cartItems])

  const cartPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.product.price * item.count), 0)
  }, [cartItems]).toFixed(2)

  const [openCart, setOpenCart] = useState(false)

  const cartRef = React.useRef<HTMLDivElement>(null)

  useOnClickOutside(cartRef, () => {
    setOpenCart(false)
  })

  const dispatch = useAppDispatch();


  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <Wrap>
      <Container>
        <div className='nav'>
          <div className='links'>
            <StyledLink to={'/'}>
              Home
            </StyledLink>
          </div>

          <div className='cart' onClick={() => setOpenCart(!openCart)}>
            Cart
            <div className='counter'>
              <span>{cartItemsCount}</span>
            </div>
          </div>
        </div>
      </Container>

      <Cart active={!openCart} ref={cartRef}>
        <div className='content'>
          <div className='totalPrice'>
            Total price: {cartPrice} UAH
          </div>

          {cartItems && cartItems.map(item => (
            <div className='cartItem' key={item.product.id}>
              <img className='image' src={item.product.image} alt='' />
              <div className='info'>
                <div className='title'>{item.product.title}</div>
                <div className='count'>
                  <span onClick={() => {dispatch(decreaseProductCount(item.product))}}>-</span>
                  <span className="value">{item.count}</span>
                  <span onClick={() => {dispatch(increaseProductCount(item.product))}}>+</span>
                </div>
              </div>
              <div className='price'>{(item.product.price * item.count).toFixed(2)} UAH</div>
              <div onClick={() => dispatch(removeProductFromCart(item))} className="delete">delete</div>
            </div>
          ))}
        </div>
      </Cart>
    </Wrap>
  )
}

const Wrap = styled.header`
  background-color: #242526;
  padding: 10px 0;
  color: #fff;

  .nav {
    display: flex;
    justify-content: space-between;
  }

  .cart {
    color: #fff;
    text-decoration: none;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;

    .counter {
      font-size: 12px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #3b853b;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        line-height: 10px;
      }
    }
  }
`

const Cart = styled.div<{ active: boolean }>`
  margin: 0;
  max-width: 600px;
  width: 100%;
  height: 100%;
  transform: translateX(0) !important;
  top: 40px;
  position: fixed;
  background-color: #242526;
  right: 0;
  transform: translateX(120%);
  z-index: 10;
  transition: .3s all ease-in-out;
  box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;

  ${({ active }) => active && `
    transform: translateX(120%) !important;
    z-index: 0;
  `}
  .content {
    padding: 20px 0;

    .totalPrice{
      padding: 0 20px;
    }
    .cartItem {
      display: flex;
      gap: 10px;
      padding: 20px;
      border-bottom: 1px solid #595959;
      align-items: center;
      justify-content: space-between;

      .image {
        width: 50px;
        object-fit: contain;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        .count {
          display: flex;
          gap: 10px;
          align-items: center;

          .value {
            padding: 5px 10px;
            background: #606060;
            border-radius: 5px;
            cursor: auto;
          }
          span{
            cursor: pointer;
            user-select: none;
          }
        }

      }
      .delete {
        color: red;
        cursor: pointer;
      }
    }
    
  }
`
export default Header