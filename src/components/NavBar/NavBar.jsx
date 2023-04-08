import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.contenedorNavBar}>
      <img src="https://www.pngmart.com/files/5/Race-Car-Transparent-PNG.png" alt="logo principal" />
      <ul className={styles.menu}>
        <li className={styles.itemMenu}>Calle</li>
        <li className={styles.itemMenu}>Calle-Trackdays</li>
        <li className={styles.itemMenu}>Competición</li>
        <li className={styles.itemMenu}>Merch</li>
      </ul>
      <CartWidget />
    </div>
  );
};
