import LogoGrafica from "./logografica.png";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget.js/CartWidget";
import { NavLink } from "react-router-dom";

function NavbarGrafica() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="logo" to="/">
          <img src={LogoGrafica} />
        </NavLink>
        <NavLink className="navBars" to="/category/Imprenta">
          IMPRENTA
        </NavLink>
        <NavLink className="navBars" to="/category/Almacen">
          ALMACEN
        </NavLink>
        <NavLink className="navBars carrito" to="/cart">
          <CartWidget />
        </NavLink>
      </Container>
    </Navbar>
  );
}
export default NavbarGrafica;
