"use client";
import React, { useState } from "react";
import Container from "@/components/ui/Container";

const ShoppingCart = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <div className="px-7 py-6">
        <h1 className="font-bold text-4xl">Shopping Cart</h1>
      </div>

      <div className="py-6 px-7">
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <p>{item.name} - ${item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total Price: ${calculateTotalPrice()}</p>
          </div>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </Container>
  );
};

export default ShoppingCart;
