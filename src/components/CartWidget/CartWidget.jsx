import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.contenedorCarrito}>
      <ShoppingCartCheckoutIcon className={styles.carrito}/>
    </div>
  ); 
  
};

export default CartWidget;
