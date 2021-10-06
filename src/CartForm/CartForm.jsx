import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../firebase";
import { Link } from "react-router-dom";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useCartContext } from "../cart/CartContext";
//Style
import "./CartForm.css";
//Formik
import { Formik } from "formik";

const CartForm = () => {
  const { cart, totalPrice, clear } = useCartContext();
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

  const handleChange = (e) => {
    const value = e.target.value;

    setFormState({
      ...form,
      [e.target.name]: value,
    });
  };

  return (
    <div className="formContainer">
      {numDeCompra === "" ? (
        <Formik
          initialValues={form}
          validate={() => {
            let errors = {};
            if (!form.nombre) {
              errors.nombre = "Por favor ingresa un nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{3,25}$/.test(form.nombre)) {
              errors.nombre =
                "El nombre tiene que ser de 3 a 25 digitos y solo puede contener letras y espacios";
            }
            if (!form.apellido) {
              errors.apellido = "Por favor ingresa un apellido";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{3,25}$/.test(form.apellido)) {
              errors.apellido =
                "El apellido tiene que ser de 3 a 25 digitos y solo puede contener letras y espacios.";
            }
            if (!form.cel) {
              errors.cel = "Por favor ingresa un Número de teléfono";
            } else if (!/^\d{7,14}$/.test(form.cel)) {
              errors.cel =
                "El Número de teléfono tiene que ser de 7 a 14 números";
            }
            if (!form.email) {
              errors.email = "Por favor ingresa un email.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                form.email
              )
            ) {
              errors.email =
                "El email solo puede contener letras, puntos, guiones, guion bajo y números.";
            }
            //emailConfirmacion
            if (!form.email2) {
              errors.email2 = "Por favor ingresa un email.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                form.email2
              )
            ) {
              errors.email2 =
                "El email solo puede contener letras, puntos, guiones, guion bajo y números.";
            } else if (form.email2 !== form.email) {
              errors.email2 = "El email no coincide.";
            }
            return errors;
          }}
          onSubmit={async (valores, { resetForm }) => {
            try {
              const docRef = await addDoc(collection(db, "compras"), form);
              setNumDeCompra(docRef.id);
            } catch (error) {
              return error;
            }
            resetForm();
            clear();
          }}
          handleSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {({ errors, touched, handleSubmit, handleBlur }) => (
            <Form
              autoComplete="off"
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
                    onBlur={handleBlur}
                    value={form.nombre}
                    className="input"
                  />
                </div>
                {touched.nombre && errors.nombre && (
                  <div className="leyendaError">{errors.nombre}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label className="label">Apellido</Form.Label>
                <div className="grupoInput">
                  <Form.Control
                    type="text"
                    name="apellido"
                    placeholder="Ej: Mena"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.apellido}
                    className="input"
                  />
                </div>
                {touched.apellido && errors.apellido && (
                  <div className="leyendaError">{errors.apellido}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label className="label">Número de teléfono</Form.Label>
                <div className="grupoInput">
                  <Form.Control
                    type="text"
                    name="cel"
                    placeholder="Ej: 2804568365"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.cel}
                    className="input"
                  />
                </div>
                {touched.cel && errors.cel && (
                  <div className="leyendaError">{errors.cel}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="label">Dirección de email</Form.Label>
                <div className="grupoInput">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Ej: leandromena_94@hotmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email}
                    className="input"
                  />
                </div>
                {touched.email && errors.email && (
                  <div className="leyendaError">{errors.email}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="label">Confirmacion de email</Form.Label>
                <div className="grupoInput">
                  <Form.Control
                    type="email"
                    name="email2"
                    placeholder="Ej: leandromena_94@hotmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.email2}
                    className="input"
                  />
                </div>
                {touched.email2 && errors.email2 && (
                  <div className="leyendaError">{errors.email2}</div>
                )}
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
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <h3 className="h3 numDeCompra m-auto text-center">
            Este es su numero de compra:
          </h3>
          <p className="text-center mb-5 h4 text-primary">{numDeCompra}</p>
          <div className="m-auto">
            <Link to="/" className="btonVolver">
              Volver a Home
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartForm;
