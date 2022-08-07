import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget.js/CartWidget";

function NavbarGrafica() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GraficaB377</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category/Imprenta">Imprenta</Nav.Link>
          <Nav.Link href="/category/Almacen">Almacen</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
export default NavbarGrafica;
