import "./ItemDetail.css";
import React, { useState } from "react";
import Contador from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export default function ItemDetail({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  stock,
}) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(quantity); // aca creo que esta el error no tomo ninguna prop como en el item.js
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
