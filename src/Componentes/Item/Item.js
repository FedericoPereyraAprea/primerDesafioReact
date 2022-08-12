import "./Item.css";
import React, { useState } from "react";
import Contador from "../ItemCount/ItemCount";
import { useNavigate, Link } from "react-router-dom";

const Item = ({ producto }) => {
  const irDetalles = useNavigate();
  const itemDetailContainer = () => {
    irDetalles(`/item/${producto.id}`);
  };
  const [goToCart, setGoToCart] = useState(false);
  const onAdd = (quantity) => {
    setGoToCart(true);
  };
  return (
    <div className="base-productos">
      <div className="productos">
        <li>
          <ul>
            <img className="imagenes" src={producto.imagen} />
          </ul>
          <ul className="producto-nombre">{producto.nombre}</ul>
          <ul className="precio">${producto.precio} </ul>
          <ul className="stock">Stock: {producto.stock}</ul>
          <ul>
            {goToCart ? (
              <Link to="/cart">Finalizar compra</Link>
            ) : (
              <Contador initial={1} stock={producto.stock} onAdd={onAdd} />
            )}
          </ul>
          <button className="mas-info" onClick={itemDetailContainer}>
            Más Detalles
          </button>
        </li>
      </div>
    </div>
  );
};

export default Item;
