import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext);

  let totalProductsCount = getTotalQuantity();

  return (
    <Link to="/cart" className={styles.contenedorCarrito}>
      <div>
        <ShoppingCartCheckoutIcon className={styles.carrito} />
      </div>
      <div className={styles.bubbleCounter}>
        <span>{totalProductsCount}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
