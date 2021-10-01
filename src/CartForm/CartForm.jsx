import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../firebase";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useCartContext } from "../cart/CartContext";
//Style
import "./CartForm.css";
// FontAwesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const CartForm = () => {
  const { cart, totalPrice } = useCartContext();
  const [numDeCompra, setNumDeCompra] = useState("");

  const [form, setFormState] = useState({
    nombre: "",
    apellido: "",
    email: "",
    email2: "",
    cel: "",
    items: cart,
    date: Timestamp.fromDate(new Date()),
    total: totalPrice,
  });

  const validacion = () => {
    if (/^[a-zA-ZÀ-ÿ\s]{1,10}$/.test(form.nombre)) {
      console.log("nombre correcto");
      return;
    } else {
      console.log("nombre Incorrecto");
    }

    if (validarEmail) {
      validarEmail();
    }
  };

  // Letras y espacios, pueden llevar acentos.

  const handleChange = (e) => {
    const value = e.target.value;

    setFormState({
      ...form,
      [e.target.name]: value,
    });
  };

  const validarEmail = () => {
    if (form.email.length > 0) {
      if (form.email !== form.email2) {
        console.log("las contrasenias no son iguales");
      } else {
        console.log("las contrasenias son iguales");
      }
    }
  };
  // const expresiones = {
  //   nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  //   apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  //   email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //   email2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  //   cel: /^\d{7,14}$/, // 7 a 14 numeros.
  // };

  // const validacion = () => {
  //   if (expresiones) {
  //     if (expresiones.test(form.nombre)) {
  //       console.log("Input Correcto");
  //     } else {
  //       console.log("Input Incorrecto");
  //     }
  //   }
  // };

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
    <div className="formContainer">
      {numDeCompra === "" ? (
        <Form
          className="d-flex flex-column justify-content-start"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label className="label">Nombre</Form.Label>
            <div className="grupoInput">
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Ej: Leandro"
                onChange={handleChange}
                onKeyUp={validacion}
                onBlur={validacion}
                value={form.nombre}
                className="input"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="iconoValidacion"
              />
            </div>
            <p className="leyendaError">Lorem ipsum dolor sit, amet.</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label className="label">Apellido</Form.Label>
            <div className="grupoInput">
              <Form.Control
                type="text"
                name="apellido"
                placeholder="Ej: Mena"
                onChange={handleChange}
                onKeyUp={validacion}
                onBlur={validacion}
                value={form.apellido}
                className="input"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="iconoValidacion"
              />
            </div>
            <p className="leyendaError">Lorem ipsum dolor sit, amet.</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label className="label">Número de teléfono</Form.Label>
            <div className="grupoInput">
              <Form.Control
                type="text"
                name="cel"
                placeholder="Ej: 2804568365"
                onChange={handleChange}
                onKeyUp={validacion}
                onBlur={validacion}
                value={form.cel}
                className="input"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="iconoValidacion"
              />
            </div>
            <p className="leyendaError">Lorem ipsum dolor sit, amet.</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="label">Dirección de email</Form.Label>
            <div className="grupoInput">
              <Form.Control
                type="email"
                name="email"
                placeholder="Ej: leandromena_94@hotmail.com"
                onChange={handleChange}
                onKeyUp={validacion}
                onBlur={validacion}
                value={form.email}
                className="input"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="iconoValidacion"
              />
            </div>
            <p className="leyendaError">Lorem ipsum dolor sit, amet.</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="label">Confirmacion de email</Form.Label>
            <div className="grupoInput">
              <Form.Control
                type="email"
                name="email2"
                placeholder="Ej: leandromena_94@hotmail.com"
                onChange={handleChange}
                onKeyUp={validacion}
                onBlur={validacion}
                value={form.email2}
                className="input"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="iconoValidacion"
              />
            </div>
            <p className="leyendaError">Lorem ipsum dolor sit, amet.</p>
            <Form.Text className="text-muted">
              Tu email nunca sera compartido.
            </Form.Text>
          </Form.Group>

          <div className="contenedorBotonCentrado">
            <Button
              variant="primary"
              type="submit"
              className="align-center Boton"
            >
              <b>Finalizar compra</b>
            </Button>
            <p className="mensajeExito">Formulario enviado exitosamente!</p>
          </div>
          {false && (
            <div className="mensajeError">
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor completa el formulario correctamente
              </p>
            </div>
          )}
        </Form>
      ) : (
        <h3 className="h3">Este es su numero de compra: {numDeCompra}</h3>
      )}
    </div>
  );
};

export default CartForm;
