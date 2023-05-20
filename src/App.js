import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContaier } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/Cart/CartContainer";
import Login from "./components/Login/Login";
import CartContextProvider from "./Context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";



function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/itemDetail/:id" element={<ItemDetailContaier />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/checkOut" element={<FormCheckoutContainer />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;