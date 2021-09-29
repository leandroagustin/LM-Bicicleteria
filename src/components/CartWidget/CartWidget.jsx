import React from "react";

import { useCartContext } from "../../cart/CartContext";

import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <>
      <AiOutlineShoppingCart className="mt-3 text-light" />
      <span className="text-light">{totalItems}</span>
    </>
  );
};

export default CartWidget;
