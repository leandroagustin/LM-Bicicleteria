import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock}) => {
    const [bike, setBike] = useState(1);

    const onAdd = () => {
        setBike(bike + 1);
        if (bike > 4) {
            setBike(5);
        }
    }
    const Decrementar = () => {
        setBike(bike - 1);
        if (bike < 2) {
            setBike(1);
        }
    }

    return (
        <div className="btnContainer">
            <h1>Megamo Kinetic 2021</h1>
            <p>Stock disponible: {stock}</p>
            <button onClick={onAdd}>Agregar +</button>
            <p>{bike}</p>
            <button onClick={Decrementar}>Quitar -</button>
            <button className="btnCarrito">Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
