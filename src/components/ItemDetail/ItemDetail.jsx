import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Image } from "semantic-ui-react";
//
import { useCartContext } from "../../cart/CartContext";

const ItemDetail = ({ item }) => {
  const [product, setProduct] = useState(0);

  const { addItemCart } = useCartContext();

  //Creo la funcion onAdd
  const onAdd = (p) => {
    setProduct(p);
    addItemCart(item, p);
  };

  return (
    <>
      <div className="itemDetail">
        <div className="itemDetailcontent">
          <h1>{item.title}</h1>
          <img className="itemDeailImg" src={Item.img} alt="Conor Java"></img>
          <p>
            <b>Descripcion: </b> {item.descriptionSecondary}
          </p>
          <p>
            <b>Categoria: {item.category}</b>
          </p>
          <span>
            <b>Precio: € {item.price}</b>
          </span>
        </div>
        <div className="itemDetailItemCount">
          {product > 0 ? (
            <Card
              style={{
                height: "220px",
                width: "250px",
                margin: "50px 0 0 0",
              }}
            >
              <Card.Content>
                <Image floated="right" size="mini" src={item.image} />
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>{item.category}</Card.Meta>
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
          ) : (
            <ItemCount stock="5" initial="0" onAdd={onAdd} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
