import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "../Contact.css";

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulario enviado:", values);
    resetForm();
  };

  return (
    <div className="contact-container">
    <div className="contact-card">
      <h2>Contactame</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
<br />
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
<br />
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          
<br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default Contact;
