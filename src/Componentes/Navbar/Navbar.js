import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget.js/CartWidget';


function NavbarGrafica() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GraficaB377</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#features">Quienes Somos</Nav.Link>
            <Nav.Link href="#pricing">Mi cuenta</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
  );
}
export default NavbarGrafica;