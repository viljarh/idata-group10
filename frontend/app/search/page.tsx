"use client"
import React, { useState } from "react";
import Container from "@/components/ui/Container";

const SearchCars = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle form submission (search)
  const handleSearch = (event) => {
    event.preventDefault();
    // Here you can implement the logic to perform the search, either locally or by making an API request to a backend
    // For the sake of simplicity, I'll just set some dummy search results
    const dummyResults = [
      { id: 1, make: "Toyota", model: "Camry", year: 2020 },
      { id: 2, make: "Honda", model: "Civic", year: 2019 },
      { id: 3, make: "Ford", model: "Fusion", year: 2018 },
    ];
    setSearchResults(dummyResults);
  };

  return (
    <Container>
      <div className="px-7 py-6">
        <h1 className="font-bold text-4xl">Search Cars</h1>
      </div>

      <div className="px-7 py-6">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for cars..."
            className="px-4 py-2 border rounded-md mr-2"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Search
          </button>
        </form>

        <div>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((car) => (
                <li key={car.id}>
                  {/* Display car details */}
                  <p>Make: {car.make}</p>
                  <p>Model: {car.model}</p>
                  <p>Year: {car.year}</p>
                  {/* Add more details as needed */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No cars found.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SearchCars;
