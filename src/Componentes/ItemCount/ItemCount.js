import React, { useState } from 'react'
import './ItemCount.css';

function Contador () {
    const [contador, setContador] = useState(0);
    function sumar () {
        setContador(contador + 1)
        //contador > 10 ? setContador(contador + 1) : alert('No hay mas stock');
    }
    function restar () {
        setContador(contador - 1)
        contador > 0 ? setContador(contador - 1) : alert('No hay mas productos en el carrito');
    }
    return (
    <div className='contador'>
        <button className='restar' onClick={restar}>-</button>
        <p className='contCarrito'>
            {contador}
        </p>
        <button className='sumar' onClick={sumar}>+</button>
    </div>
    );
}

export default Contador