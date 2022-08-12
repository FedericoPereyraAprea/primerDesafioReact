import React, { useState } from "react";
import "./ItemCount.css";

export const Contador = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const restar = () => {
    setCount(count - 1);
  };
  const sumar = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="contador">
        <button
          disabled={count <= 1}
          className={count > 0 ? "restar" : "disabledButton"}
          onClick={restar}
        >
          {" "}
          -{" "}
        </button>
        <p className="contCarrito">{count}</p>
        <button
          disabled={count >= stock}
          className={count <= stock ? "sumar" : "disabledButton"}
          onClick={sumar}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <div className="contAddCarrito">
        <button
          className="addCarrito"
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default Contador;
