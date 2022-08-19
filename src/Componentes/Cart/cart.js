import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";
import "./cart.css";
import EmptyCart from "./empty_cart.png";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <div className="noProducts">
          <p>No hay productos en el carrito</p>
          <Link to="/"> ¡Comprar! </Link>
          <img src={EmptyCart} />
        </div>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="total"> Total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
