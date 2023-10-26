import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert'
import "./BillingDetailsForm.css";

const BillingDetailsForm = () => {
  //declaration of variables

  const refForm = useRef();

  const [formData, setFormData] = useState({
    name: "",
    streetAddress: "",
    city: "",
    phone: "",
    sendToDifferentAddress: false,
    orderNotes: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_rs4nxyt";
    const templateId = "template_8s86z8h";
    //param
    const apiKey = "EMHETMK7QKzee6x9d";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text);
        swal({
          title: "Pedido Realizado",
          text: "Su pedido fue realizado, en breve un asesor se comunicará con usted para coordinar la entrega de su pedido",
          icon: "success",
          button: "Aceptar"
        });
        window.location.href = "/";
      })
      .catch((error) => console.error(error));
  };



  return (
    <div className="billing-details-form">
      <form ref={refForm} action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre**</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="gray-background"
          />
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">
            Dirección de la calle (opcional)
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="gray-background"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Localidad / Ciudad (opcional)</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="gray-background"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="gray-background"
          />
        </div>

        <div className="form-group">
          <label htmlFor="orderNotes">Notas del pedido (opcional)</label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            className="gray-background"
          />
        </div>
        <button className="submit-button" type="submit">
          Realizar el pedido
        </button>
      </form>
    </div>
  );
};

export default BillingDetailsForm;
