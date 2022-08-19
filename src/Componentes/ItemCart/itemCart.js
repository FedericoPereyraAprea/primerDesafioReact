import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.imagen} alt={product.nombre} />
      <div>
        <p className="nombreProd">{product.nombre}</p>
        <p>Cant: {product.quantity}</p>
        <p>Precio por unidad: ${product.precio}</p>
        <p className="subtotal">
          subtotal: ${product.quantity * product.precio}
        </p>
        <button
          onClick={() => removeProduct(product.id)}
          className="eliProduct"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
