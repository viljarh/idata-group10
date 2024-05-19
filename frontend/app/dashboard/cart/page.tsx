"use client";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeCartItem,
  createOrder,
  clearCart,
} from "@/app/api/cart/cart";
import { Button } from "@/components/ui/button";
import { VehicleProps } from "@/types";

interface CartItemProps {
  cartItemId: number;
  vehicle: VehicleProps;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const data: CartItemProps[] = await getCartItems();
      setCartItems(data);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  const handleRemoveItem = async (cartItemId: number) => {
    try {
      await removeCartItem(cartItemId);
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
      {cartItems.map((item) => (
        <div key={item.cartItemId}>
          <p>
            {item.vehicle.manufacturer} {item.vehicle.model}
          </p>
          <p>Quantity: {item.quantity}</p>
          <Button onClick={() => handleRemoveItem(item.cartItemId)}>
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
