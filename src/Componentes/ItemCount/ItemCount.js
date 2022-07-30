import React, { useState } from 'react'
import './ItemCount.css';

function Contador () {
    const [contador, setContador] = useState(0);
    function sumar () {
        if(contador == 10){
            return
        }
        setContador(contador + 1);
        
    }
    function restar () {
        if(contador < 1){
            return
        }
        setContador(contador - 1);
    }
    return (
    <div className='contador'>
        <button className={contador > 0 ? 'restar' : 'disabledButton'} onClick={restar}> - </button>
        <p className='contCarrito'>
            {contador}
        </p>
        <button className={contador < 10 ? 'sumar' : 'disabledButton'} onClick={sumar}> + </button>
    </div>
    );
}

export default Contador