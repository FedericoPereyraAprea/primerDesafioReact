import "./ItemDetail.css";
import React, { useState } from "react";
import Contador from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export default function ItemDetail({ item }) {
  const { id, imagen, nombre, descripcion, precio, stock } = item;
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };
  return (
    <div className="base-productos individual">
      <div className="productos">
        <li>
          <ul>
            <img className="imagenes" src={imagen} />
          </ul>
          <ul className="producto-nombre">{nombre}</ul>
          <ul className="desc-productos">{descripcion}</ul>
          <ul className="precio item">${precio}</ul>
          <ul className="stock">Stock:{stock}</ul>
          <ul>
            {goToCart ? (
              <Link to="/cart">Finalizar compra</Link>
            ) : (
              <Contador initial={1} stock={stock} onAdd={onAdd} />
            )}
          </ul>
        </li>
      </div>
    </div>
  );
}
