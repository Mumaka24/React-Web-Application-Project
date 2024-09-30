// src/components/QuotationForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuotations } from '../features/insuranceSlice';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    carModel: '',
    age: '',
    drivingExperience: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuotations(formData));  // Dispatch the API call
  };

  return (
    <form onSubmit={handleSubmit} className="quotation-form">
      <input
        type="text"
        name="carModel"
        placeholder="Car Model"
        value={formData.carModel}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
        className="input-field"
      />
      <input
        type="number"
        name="drivingExperience"
        placeholder="Years of Driving Experience"
        value={formData.drivingExperience}
        onChange={handleChange}
        required
        className="input-field"
      />
      <button type="submit" className="submit-button">Get Quotes</button>
    </form>
  );
};

export default QuotationForm;
