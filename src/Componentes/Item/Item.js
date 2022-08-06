import "./Item.css"
import React from 'react'
import Contador from '../ItemCount/ItemCount'
import { useNavigate, Link } from "react-router-dom";

const Item = ({producto}) => {
    const irDetalles = useNavigate();
    const itemDetailContainer = () => {
        irDetalles(`/item/${producto.id}`);
      };
    return (
        <div className='base-productos'>
           <div className="productos">
                <li>
                    <ul><img className='imagenes' src={producto.imagen}/></ul>
                    <ul className='producto-nombre'>{producto.nombre}</ul>
                    <ul className='precio'>${producto.precio} </ul>
                    <ul className='stock'>Stock: {producto.stock}</ul>
                    <ul><Contador/></ul>
                    <button className="mas-info" onClick={itemDetailContainer}>Más Detalles</button>
                    <Link to={`/item/${producto.id}`}>alla vamos!</Link>
                </li>
            </div> 
        </div>        
    )
}

export default Item