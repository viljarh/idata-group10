import axiosInstance from "@/axios/axiosInstance";

// Get Cart Items
export async function getCartItems() {
  const response = await axiosInstance.get("/cart");
  return response.data;
}

// Remove Cart Item
export async function removeCartItem(cartItemId: number) {
  const response = await axiosInstance.delete(`/cart/${cartItemId}`);
  return response.data;
}

// Create Order (Checkout)
export async function createOrder() {
  const response = await axiosInstance.post("/orders");
  return response.data;
}

// Clear Cart
export async function clearCart() {
  const response = await axiosInstance.delete("/cart");
  return response.data;
}
