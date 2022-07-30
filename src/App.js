import './App.css';
import NavbarGrafica from './Componentes/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Componentes/ItemListContainer/ItemListContainer';



function App() {

  return (
      <>
      <NavbarGrafica />
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <Container />
          </div>
        </div>      
      </div>
      </>
  );
}

export default App;
