/**
 * Created with help from ChatGPT
 */

import axiosInstance from "@/axios/axiosInstance";
import { createContext, useContext, useState } from "react";

interface CartItem {
  vehicleId: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (vehicleId: number, quantity: number) => void;
  removeFromCart: (vehicleId: number) => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = async (vehicleId: number, quantity: number) => {
    await axiosInstance.post("/cart/add", { vehicleId, quantity });
    setCartItems([...cartItems, { vehicleId, quantity }]);
  };

  const removeFromCart = async (vehicleId: number) => {
    await axiosInstance.delete(`/cart/remove/${vehicleId}`);
    setCartItems(cartItems.filter((item) => item.vehicleId !== vehicleId));
  };

  const checkout = async () => {
    await axiosInstance.post("/orders/checkout");
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
