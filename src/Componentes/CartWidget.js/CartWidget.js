import LogoCart from "./carrito.png";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./cartWidget.css";
export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <div className="cartWidget">
        <img src={LogoCart} className="carrito" />
        <span className="cantProduct">{totalProducts() || ""}</span>
      </div>
    </>
  );
};

export default CartWidget;
