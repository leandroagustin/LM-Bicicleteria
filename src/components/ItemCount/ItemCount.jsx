import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [product, setProduct] = useState(Number(initial));
  const [nuevoStock, setNuevoStock] = useState(stock);

  const Decrementar = () => {
    if (product > 0) {
      setProduct(product - 1);
      setNuevoStock(nuevoStock + 1);
    }
  };
  const Incrementar = () => {
    if (stock > product && nuevoStock > 0) {
      setProduct(product + 1);
      setNuevoStock(nuevoStock - 1);
    } else {
    }
  };

  const add = (product) => {
    if (product > 0) {
      setProduct(product - nuevoStock);
      setNuevoStock(nuevoStock - product);
      onAdd(product);
      setProduct(0);
    }
  };

  return (
    <>
      <div className="btnContainer">
        <p className="parrafoBtn1">Stock disponible: {nuevoStock}</p>
        <Button
          className="btn"
          variant="outline-primary"
          onClick={Incrementar}
          disabled={product === Number(stock)}
        >
          {" "}
          +
        </Button>
        <p className="parrafoBtn2">{product}</p>
        <Button
          className="btn"
          variant="outline-primary"
          onClick={Decrementar}
          disabled={product === 0}
        >
          {" "}
          -
        </Button>
        <Button
          className="bton btnAgregar"
          variant="outline"
          onClick={() => add(product)}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
