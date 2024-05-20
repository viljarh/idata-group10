import axiosInstance from "@/axios/axiosInstance";
import { VehicleProps } from "@/types";

// Get Cart Items
export async function getCartItems() {
  const response = await axiosInstance.get("/cart");
  return response.data;
}

// Remove Cart Item
export async function removeCartItem(cartItemId: number) {
  const response = await axiosInstance.delete(`/cart/remove/${cartItemId}`);
  return response.data;
}

// Create Order (Checkout)
export async function createOrder() {
  const response = await axiosInstance.post("/orders/create");
  return response.data;
}

// Clear Cart
export async function clearCart() {
  const response = await axiosInstance.delete("/cart/clear");
  return response.data;
}

