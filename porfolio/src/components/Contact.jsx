import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    // Aquí puedes manejar el envío del formulario, como enviar un correo electrónico o realizar una solicitud a un servidor.
    // Por ejemplo, puedes utilizar una función para enviar los datos del formulario a tu servidor o a una API.
    // Luego de manejar el envío, puedes limpiar el formulario utilizando resetForm()
    console.log("Formulario enviado:", values);
    resetForm();
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
