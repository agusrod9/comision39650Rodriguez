import { Height } from "@mui/icons-material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import {Outlet, Link, NavLink} from "react-router-dom"

export const NavBar = () => {
  return (
    <div>
      <div className={styles.contenedorNavBar}>
        <Link to="/">
        <img style={{height:90 , resizeMode: 'cover'}}
          src="https://www.pngmart.com/files/5/Race-Car-Transparent-PNG.png"
          alt="logo principal"
        />
        </Link>
          <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.inActive}>Todo</NavLink>
          <NavLink to="/category/road" className={({isActive}) => isActive ? styles.active : styles.inActive}>Calle</NavLink>
          <NavLink to="/category/fastRoad" className={({isActive}) => isActive ? styles.active : styles.inActive}>Calle-Trackdays</NavLink>
          <NavLink to="/category/race" className={({isActive}) => isActive ? styles.active : styles.inActive}>Competición</NavLink>
          <NavLink to="/category/merch" className={({isActive}) => isActive ? styles.active : styles.inActive}>Merch</NavLink>
        <CartWidget />
      </div>

      
      <Outlet />
    </div>
  );
};
