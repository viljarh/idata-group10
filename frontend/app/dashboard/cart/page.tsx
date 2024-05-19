"use client";
import {
  clearCart,
  createOrder,
  getCartItems,
  removeCartItem,
} from "@/app/api/cart/cart";
import { Button } from "@/components/ui/button";
import { VehicleProps } from "@/types";
import React, { useEffect, useState } from "react";

interface CartItemsProps {
  vehicle: VehicleProps;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const data = await getCartItems();
      setCartItems(data);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  const handleRemoveItem = async (vehicleId: number) => {
    try {
      await removeCartItem(vehicleId);
      fetchCartItems();
    } catch (error) {
      console.error("Failed to remove cart item", error);
    }
  };

  const handleCheckout = async () => {
    try {
      await createOrder();
      fetchCartItems();
    } catch (error) {
      console.error("Failed to checkout", error);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart();
      fetchCartItems();
    } catch (error) {
      console.error("Failed to clear cart", error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item: CartItemsProps) => (
        <div key={item.vehicle.vehicleId}>
          <p>
            {item.vehicle.manufacturer} {item.vehicle.model}
          </p>
          <p>Quantity: {item.quantity}</p>
          <Button onClick={() => handleRemoveItem(item.vehicle.vehicleId)}>
            Remove
          </Button>
        </div>
      ))}
      <Button onClick={handleCheckout}>Checkout</Button>
      <Button onClick={handleClearCart}>Clear Cart</Button>
    </div>
  );
};

export default Cart;
