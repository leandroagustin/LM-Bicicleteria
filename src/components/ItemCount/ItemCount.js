import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [bike, setBike] = useState(initial = 0);
    const [nuevoStock, setNuevoStock] = useState(stock);  
  
    const Decrementar = () => {
        if (bike > 1) {
            setBike(bike - 1);
            setNuevoStock(nuevoStock + 1);
        }
    }
    const Incrementar = () => {
        if (stock > bike && nuevoStock > 0) {
            setBike(bike + 1);
            setNuevoStock(nuevoStock - 1);
        }
    }
        
    onAdd = () => {

      if (bike > 0) {
          setBike(bike - nuevoStock);
          setBike(bike - 1)
          console.log(`Id:${bike}`);
        }
        
    }

    return (
        <div className="btnContainer">
            <h1>Megamo Kinetic 2021</h1>
            <p>Stock disponible: {nuevoStock}</p>
            <button onClick={Incrementar}>Agregar +</button>
            <p>Cantidad:{bike}</p>
            <button onClick={Decrementar}>Quitar -</button>
            <button onClick={onAdd} className="btnCarrito">Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;