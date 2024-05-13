import React, { useState } from 'react'

const FilterSidebar = ({ onFilterChange }) => {
  const handlePriceChange = (min, max) => {
    onFilterChange('price', { min, max })
  };
  const handleCategoryChange = (category) => {
    onFilterChange('category', category)
  }
  return (
    <div className="filter-sidebar">
      <h4>Filter Vehicles</h4>
      <div>
        <label>Price Range:</label>
        <input type="number" placeholder="Min Price" onChange={(e) => handlePriceChange(e.target.value, null)} />
        <input type="number" placeholder="Max Price" onChange={(e) => handlePriceChange(null, e.target.value)} />
      </div>
      <div>
        <label>Category:</label>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
        </select>
      </div>
    </div>
  )
}

export default FilterSidebar
