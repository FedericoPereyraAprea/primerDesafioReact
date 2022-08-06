import "./ItemList.css"
import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {
    return (
        <div className="contenedor">
            {props.producto.map(producto => <Item producto={producto} key={producto.id} stock={producto.stock}/>)}
        </div>
  )
}

export default ItemList