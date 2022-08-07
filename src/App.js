import "./App.css";
import NavbarGrafica from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="app">
      <NavbarGrafica />
      <div className="container">
        <div className="row">
          <div className="col">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Container />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:category" element={<Container />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
