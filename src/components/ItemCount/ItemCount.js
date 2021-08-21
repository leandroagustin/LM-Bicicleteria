import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [bike, setBike] = useState(initial = 0);
    const [nuevoStock, setNuevoStock] = useState(stock);  
  
    const Decrementar = () => {
        if (bike > 0) {
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
          setBike(0)
          console.log(`Cantidad:${bike}`);
        }
        
    }

    return (
        <div className="btnContainer">
            <p>Stock disponible: {nuevoStock}</p>
            <button disabled={bike === Number(stock)} onClick={Incrementar}>Agregar +</button>
            <p>Cantidad:{bike}</p>
            <button disabled={bike === 0} onClick={Decrementar}>Quitar -</button>
            <button onClick={onAdd} className="btnCarrito">Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;