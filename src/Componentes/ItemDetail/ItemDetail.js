import "./ItemDetail.css";
import React from "react";
import Contador from "../ItemCount/ItemCount";
export default function ItemDetail ({ imagen, id, nombre, descripcion, precio, stock }) {
  return (
    <div className='base-productos'>
      <div className="productos">
        <li>
            <ul><img className='imagenes' src={imagen}/></ul>
            <ul className='id'>ID: {id} </ul>
            <ul className='producto-nombre'>{nombre}</ul>
            <ul className="desc-productos">{descripcion}</ul>
            <ul className='precio'>${precio} </ul>
            <ul className='stock'>Stock:{stock}</ul>
            <ul><Contador/></ul>
          </li>
      </div> 
    </div> 
  );
};

