import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CartId = () => {
  const { handleSubmit } = useParams();

  const [numDeCompra, setNumDeCompra] = useState("");
  setNumDeCompra(handleSubmit);
  return (
    <>
      <h3 className="h3">Este es su numero de compra: {numDeCompra}</h3>
    </>
  );
};

export default CartId;
