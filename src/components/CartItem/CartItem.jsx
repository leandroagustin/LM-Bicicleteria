import React from "react";
import { useCartContext } from "../../cart/CartContext";

const CartItem = ({ Item }) => {
    const { removeItem } = useCartContext();

    const precioTotal = (precio, cantidad) => {
        return precio * cantidad;
    };

    return (
        <tbody>
            <tr>
                <td>
                    <img
                        className="img-fluid w-100 text-center img-cart-item"
                        src={Item.image}
                        alt={Item.title}
                    ></img>
                </td>
                <td>{Item.title}</td>
                <td className="text-center">{Item.price}</td>
                <td className="text-center">{Item.cantidad}</td>
                <td className="text-center">
                    {
                        precioTotal(Item.price, Item.cantidad)
                    }
                </td>
                <td className="text-center">
                    <button
                        className="btn fas fa-trash-alt text-center"
                        onClick={() => removeItem(Item.id)}
                    >x</button>
                </td>
            </tr>
        </tbody>
    );
};

export default CartItem;