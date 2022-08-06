import React from 'react'
import Data from '../Data/Data'
import "./ItemList.css"
import Contador from '../ItemCount/ItemCount';

const ItemList = (props) => {
  return (
    <div className='base'>
            <div className='base-productos'>
                {
                    Data.map(producto => <li key={producto.id}>
                        <ul><img className='imagenes' src={producto.imagen}/></ul>
                        <ul className='producto'>{producto.nombre}</ul>
                        <ul className='desc-productos'>{producto.descripcion}</ul>
                        <ul className='precio'>${producto.precio} </ul>
                        <ul className='stock'>Stock: {producto.stock}</ul>
                        <ul><Contador/></ul>
                    </li>)
                }
            </div>        
        </div>
  )
}

export default ItemList