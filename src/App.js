import "./App.css";
import NavbarGrafica from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartContext";
import Cart from "./Componentes/Cart/cart";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavbarGrafica />
          <div className="container">
            <div className="row">
              <div className="col">
                <Routes>
                  <Route path="/" element={<Container />} />
                  <Route path="/item/:id" element={<ItemDetailContainer />} />
                  <Route path="/category/:category" element={<Container />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </div>
            </div>
          </div>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
