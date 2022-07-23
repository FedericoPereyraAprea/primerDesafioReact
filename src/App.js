import './App.css';
import NavbarGrafica from './Componentes/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './Componentes/Productos/Productos';


function App() {
  return (
      <>
      <NavbarGrafica />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Productos />
          </div>
        </div>      
      </div>
      </>
  );
}

export default App;
