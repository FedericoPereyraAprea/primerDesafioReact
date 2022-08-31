import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";
import "./cart.css";
import EmptyCart from "./empty_cart.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const MySwal = withReactContent(Swal);
  const order = {
    buyer: {
      name: "Federico Pereyra",
      email: "federico_pereyra@hotmail.com",
      phone: "1570450408",
      address: "Billinghurst 378",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.nombre,
      price: product.precio,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };
  const finalizarCompra = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((result) =>
      MySwal.fire({
        title: <strong>¡Orden {result.id} Generada!</strong>,
        html: (
          <i>
            ¡Te contactaremos a la brevedad!
            <br />
            Gracias por confiar en GraficaB377
          </i>
        ),
        icon: "success",
      })
    );
    cart.clearCart();
  };
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
      <p className="total"> Total: ${totalPrice()}</p>
      <button onClick={finalizarCompra} className="orden">
        Generar Orden
      </button>
    </>
  );
};

export default Cart;
