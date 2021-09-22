import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../firebase";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useCartContext } from "../cart/CartContext";

const CartForm = () => {
  const { cart, totalPrice } = useCartContext();
  const [numDeCompra, setNumDeCompra] = useState("");

  const [form, setFormState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    cel: "",
    items: cart,
    date: Timestamp.fromDate(new Date()),
    total: totalPrice,
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    setFormState({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "compras"), form);
      setNumDeCompra(docRef.id);

      console.log("Numero de compra: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <>
      <Form
        className="d-flex flex-column justify-content-start"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingresa aquí tu nombre"
            onChange={handleInputChange}
            value={form.nombre}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            placeholder="Ingresa aquí tu apellido"
            onChange={handleInputChange}
            value={form.apellido}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control
            type="text"
            name="cel"
            placeholder="Ingresa tu número de teléfono"
            onChange={handleInputChange}
            value={form.cel}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Dirección de Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Dirección de Email"
            onChange={handleInputChange}
            value={form.email}
          />
          <Form.Text className="text-muted">
            Nunca compartiremos tu mail con nadie más
          </Form.Text>
        </Form.Group>

        <Button variant="warning" type="submit" className="align-center">
          <b>Finalizar compra</b>
        </Button>
      </Form>
      {numDeCompra !== "" && (
        <h3 className="h3">Este es su numero de compra: {numDeCompra}</h3>
      )}
    </>
  );
};

export default CartForm;
