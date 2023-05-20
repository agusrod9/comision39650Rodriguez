import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartContainer = () => {
  const {cart, clearCart, removeFromCart, getTotalPrice} = useContext(CartContext)
  let total = getTotalPrice();
  const navigate = useNavigate();
  return (
    <Cart cart={cart} clearCart={clearCart} removeFromCart={removeFromCart} total={total} navigate={navigate}/>
  )
}

export default CartContainer