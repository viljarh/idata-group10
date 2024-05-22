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
import { useAuth } from "@/context/authContext";

interface CartItemProps {
  cartItemId: number;
  vehicle: VehicleProps;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const { user } = useAuth();

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
      alert("Order created successfully");
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
      <div className="flex justify-center items-center mt-20">
        <div className="w-3/4 max-w-4xl p-8 rounded-lg shadow-md dark:shadow-gray-500 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {user?.firstName}&apos;s Cart
          </h2>
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
                    className="bg-red-500 hover:bg-red-600"
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
              className="w-full hover:bg-green-600 mr-2"
            >
              Checkout
            </Button>
            <Button
              onClick={handleClearCart}
              className="w-full ml-2"
              variant="ghost"
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
