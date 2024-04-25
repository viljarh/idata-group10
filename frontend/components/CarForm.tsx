"use client";
import React, { useState } from "react";

interface FormProps {
  onSubmit: (data: FormData) => void;
}
const CarForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    manufacturer: "",
    model: "",
    year: "",
    vehicleCategory: "",
    image: null,
    dailyPrice: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming you only want to handle the first file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="manufacturer">Manufacturer</label>
        <input
          type="text"
          id="manufacturer"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="vehicleCategory">Vehicle Category</label>
        <select
          id="vehicleCategory"
          name="vehicleCategory"
          value={formData.vehicleCategory}
          onChange={handleChange}
        >
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Van">Van</option>
        </select>
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="dailyPrice">Daily Price</label>
        <input
          type="text"
          id="dailyPrice"
          name="dailyPrice"
          value={formData.dailyPrice}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
