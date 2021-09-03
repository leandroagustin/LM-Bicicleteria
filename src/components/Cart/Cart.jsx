import React from "react";
import { useCartContext } from '../../cart/CartContext';
//
import { Link } from "react-router-dom";
//import components
import CartItem from "../../components/CartItem/CartItem";


const Cart = () => {

    const { cart, clear, totalItems } = useCartContext();

    return (

        <div className="cart-section-container">
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p>Tienes {totalItems} items en el Cart</p>
                <button onClick={clear} className="btn btn-info button-clear">
                    Limpiar
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
                        <p className="mt-5" style={{ fontWeight: "800", fontSize: "x-large" }}>
                            Buscá lo que quieras en
                            nuestros
                            <Link to="/" style={{ textDecoration: "none" }}>
                                {" "}
                                productos
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
