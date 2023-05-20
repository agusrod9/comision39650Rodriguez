import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let exists = cart.some(product => product.id === id);
    return exists;
  }

  const addToCart = (product) => {
    if(isInCart(product.id)){
      let newCart = cart.map((p)=>{
        if(p.id === product.id){
          return {...p, quantity: product.quantity}
        }else{
          return p;
        }
      })

      setCart(newCart);
    }else{
      setCart([...cart, product]);
    }    
  };

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    setCart(filteredProducts);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () =>{
    let total = cart.reduce((tot,prod)=>{
      return tot + (prod.price * prod.quantity);
    },0);
    return total;
  }

  const getTotalQuantity = () =>{
    let total = cart.reduce((tot,prod)=>{
      return tot + prod.quantity;
    },0);
    return total;
  }

  const getQuantityById = (id) => {
    let product = cart.find(p => p.id === id);
    return product?.quantity
    
  }

  let dataContext = {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById
  };

  return (
    <CartContext.Provider value={dataContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
