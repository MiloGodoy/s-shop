import React, { useState } from "react";
import "./BillingDetailsForm.css";

const BillingDetailsForm = () => {
  //declaration of variables

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
  };
  return (
    <div className="billing-details-form">
      <div className="form-group">
        <label htmlFor="name">Nombre (opcional)</label>
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
        <label htmlFor="streetAddress">Dirección de la calle (opcional)</label>
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
    </div>
  );
};

export default BillingDetailsForm;
