import { Button } from "@mui/material";
import React from "react";
import styles from "./Cart.module.css"

const Cart = ({ cart, clearCart, removeFromCart, total, navigate }) => {

  
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.titulo}>Productos en el carrito</h1>
      {cart.map(product => {
        return <div key={product.id} className={styles.cartItem}>
          <div className={styles.cartItemImg} >
            <img src={product.img} alt="" />
          </div>
          <div className={styles.cartItemDesc}>
            <h3>{product.title}</h3>
            <h5>Precio: U$S {product.price}</h5>
            <h5>Cantidad: {product.quantity}</h5>
            <Button onClick={()=> removeFromCart(product.id)} variant="contained">Eliminar</Button>
           </div>
        </div>
      })
      }
      <h2 className={styles.titulo}>Total: U$S {total}</h2>
      <div className={styles.btnCarrito}>
        <Button onClick={clearCart} variant="contained">Limpiar Carrito</Button>
        <Button onClick={() => navigate("/checkOut")} variant="contained">Realizar Compra</Button>

      </div>
    </div>
  );
};

export default Cart;
