import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className="divContainer">
        <h1 className="greetingContainer text-center bg-dark">{title}</h1>
      </div>

      <div className="itemListContainer">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
