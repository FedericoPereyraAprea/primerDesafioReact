import "./Item.css"
import React from 'react'
import Contador from '../ItemCount/ItemCount'

const Item = ({producto}) => {
    return (
        <div className='base-productos'>
           <div className="productos">
                <li>
                    <ul><img className='imagenes' src={producto.imagen}/></ul>
                    <ul className='productoNombre'>{producto.nombre}</ul>
                    <ul className='desc-productos'>{producto.descripcion}</ul>
                    <ul className='precio'>${producto.precio} </ul>
                    <ul className='stock'>Stock: {producto.stock}</ul>
                    <ul><Contador/></ul>
                </li>
            </div> 
        </div>        
    )
}

export default Item