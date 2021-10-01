import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Image } from "semantic-ui-react";
//
import { useCartContext } from "../../cart/CartContext";

const ItemDetail = ({ Item }) => {
  const [product, setProduct] = useState(0);

  const { addItemCart } = useCartContext();

  //Creo la funcion onAdd
  const onAdd = (p) => {
    setProduct(p);
    addItemCart(Item, p);
  };

  return (
    <>
      <div className="itemDetail">
        <div className="itemDetailcontent">
          <img className="itemDeailImg" src={Item.img} alt="Conor Java"></img>
        </div>
        <div className="itemDetailItemCount">
          <h1>{Item.title}</h1>
          <p>
            <b>Descripcion: </b> {Item.description}
          </p>
          <p>
            <b>Categoria: {Item.category}</b>
          </p>
          <span>
            <b>Precio: € {Item.price}</b>
          </span>
          {product > 0 ? (
            <Card
              style={{
                height: "280px",
                width: "333px",
                margin: "50px 0 0 0",
              }}
            >
              <Card.Content>
                <Image
                  style={{
                    height: "111px",
                    width: "111px",
                  }}
                  size="mini"
                  src={Item.img}
                />
                <Card.Header>Producto: {Item.title}</Card.Header>
                <Card.Meta>Categoria: {Item.category}</Card.Meta>
                <Card.Description>
                  Cantidad de productos seleccionados: {product}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link to="/cart">
                    <Button variant="dark" className="mx-2">
                      Comprar
                    </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          ) : Item.stock !== 0 ? (
            <ItemCount stock={Item.stock} initial="0" onAdd={onAdd} />
          ) : (
            <h1 className="mt-5 p-4 bg-primary" variant="outline-primary">
              Lo sentimos! Este producto actualmente no tiene stock.
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
