import React from "react";
import { Button } from "@mui/material";
import styles from "./Counter.module.css"


const Counter = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div className={styles.carrito}>
      <div className={styles.btnCantidad}>
        <Button variant="contained" onClick={restar}>-</Button>
        <h3>{counter}</h3>
        <Button variant="contained" onClick={sumar}>+</Button>
      </div>
      <div className={styles.btnComprar}>
        <Button variant="contained" onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
      </div>
    </div>
  );
};

export default Counter;
