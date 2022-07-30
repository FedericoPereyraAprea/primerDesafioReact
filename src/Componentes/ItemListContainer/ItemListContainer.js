import React from 'react';
import { useEffect, useState } from 'react';
import './Container.css';
import Contador from '../ItemCount/ItemCount';
import getFetch from '../Item/Item';

function Container(props) {
    const[data, setdata]=useState([]);

    useEffect(()=>{
        getFetch
        .then((resp)=>setdata(resp))
        .catch(err=>console.log(err))
      },[]);

    return (
        <div className='base'>
            <div className='base-productos'>
                {
                    data.map(producto => <li key={producto.id}>
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
    );
}
export default Container;