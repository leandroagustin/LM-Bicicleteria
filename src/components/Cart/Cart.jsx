import React from "react";
import { useCartContext } from "../../cart/CartContext";
//
import { Link } from "react-router-dom";
//import components
import CartItem from "../../components/CartItem/CartItem";
//Estilo
import "./Cart.css";
//FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, clear, totalItems, totalPrice } = useCartContext();

  return (
    <>
      <div className="cart-section-container">
        <section className="main-cart-section">
          {totalItems > 0 ? (
            <div className="cartContainer">
              <h1> Mi carrito de compras</h1>
              <p>Tienes {totalItems} productos en el carrito</p>
              <button onClick={clear} className="btn btn-info buttonClear">
                Limpiar Carrito
              </button>
              <div className="cart-items">
                <div className="table-responsive container-cart-item pt-3">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="col-3">Imagen</th>
                        <th className="col-2">Articulo</th>
                        <th className="col-1 text-center">Precio</th>
                        <th className="col-2 text-center">Cantidad</th>
                        <th className="col-1 text-center">Precio Total</th>
                        <th className="col-1 text-center">Borrar Todo</th>
                      </tr>
                    </thead>
                    {cart.map((e) => {
                      return <CartItem Item={e} key={e.id} />;
                    })}
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="carroVacioContainer">
              <FontAwesomeIcon icon={faShoppingCart} className="cartIcon" />

              <p
                className="mt-5"
                style={{ fontWeight: "800", fontSize: "x-large" }}
              >
                ¡TU CARRITO ESTÁ VACÍO!
              </p>
              <p>
                En estos momentos no has añadido ningún producto a tu compra
              </p>
              <p style={{ fontWeight: "800", fontSize: "x-large" }}>
                Buscá lo que quieras en nuestros{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  productos
                </Link>
              </p>
            </div>
          )}
          {totalItems > 0 && (
            <div className="col-lg-4 col-md btonContainer">
              <p
                style={{
                  fontWeight: "800",
                  fontSize: "x-large",
                  marginBottom: "1.5rem",
                }}
              >
                Total: ${totalPrice}
              </p>
              <div>
                <Link
                  className="mr-lg-5 btonFinDeCompra"
                  to="../../CartForm/CartForm.jsx"
                >
                  Finalizar Compra
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Cart;
