import './App.css';
import NavbarGrafica from './Componentes/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Componentes/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
      <div className='app'>
        <NavbarGrafica />
        <div className='container'>
          <div className='row'>
            <div className='col'>
            <Container />
            </div>
          </div>      
        </div>
      </div>
  );
}

export default App;
