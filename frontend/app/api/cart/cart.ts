import axiosInstance from "@/axios/axiosInstance";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const addToCart = async (vehicleId: number, quantity: number) => {
  try {
    const response = await axiosInstance.post(
      "/cart/add",
      { vehicleId, quantity },
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Failed to add to cart", error);
    throw error;
  }
};

export const getCartItems = async () => {
  try {
    const response = await axiosInstance.get("/cart", getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Failed to get cart items", error);
    throw error;
  }
};

export const removeCartItem = async (vehicleId: number) => {
  try {
    const response = await axiosInstance.delete(
      "/cart/remove/${vehicleId}",
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Failed to remove cart item", error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    const response = await axiosInstance.delete(
      "/cart/clear",
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Failed to clear cart", error);
    throw error;
  }
};

export const createOrder = async () => {
  try {
    const response = await axiosInstance.post(
      "/orders/create",
      {},
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create order", error);
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await axiosInstance.get("/orders", getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Failed to get orders");
    throw error;
  }
};
