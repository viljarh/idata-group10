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
import Container from "@/components/ui/Container";

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
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-center">Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="p-4 border rounded-lg flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold text-lg">
                      {item.vehicle.manufacturer} {item.vehicle.model}
                    </p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <Button
                    onClick={() => handleRemoveItem(item.cartItemId)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 flex justify-between">
            <Button
              onClick={handleCheckout}
              className="w-full hover:bg-green-600 text-white mr-2"
            >
              Checkout
            </Button>
            <Button
              onClick={handleClearCart}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white ml-2"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
