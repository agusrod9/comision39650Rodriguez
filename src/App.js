import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { MainContent } from "./components/MainContent/MainContent";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContaier } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContaier />} />
        </Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

<div className="App">
      <NavBar />
      <MainContent/>
      <ItemListContainer />
      <ItemDetailContaier />
    </div>

*/
