import Container from "../ItemListContainer/ItemListContainer";
import "./Productos.css"
function Productos() {
    return (
        <Container>
            <div className='producto'>
                Nombre del Producto
            </div>
            <div className='desc-productos'>
                Descripcion del producto
            </div>
            <div className='precio'>
                Precio del producto
            </div>
            <div className='stock'>
                Stock del producto
            </div>
        </Container>  
    );
}
export default Productos;