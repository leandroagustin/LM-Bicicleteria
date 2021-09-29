import React from "react";
import "./Item.css";

// PropTypes
import propTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

const Item = ({ array }) => {
  return (
    <Card
      className="card"
    >
      <Card.Img variant="top" className="cardImage 5" src={array.img} />
      <Card.Body>
        <Card.Title>{array.title}</Card.Title>
        <Card.Text>{array.category}</Card.Text>
        <Card.Text>
          <span>Precio: € {array.price}</span>
        </Card.Text>

        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
};
//Validacion de PropTypes
Item.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
  price: propTypes.number,
};

export default Item;
