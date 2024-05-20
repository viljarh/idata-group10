import axiosInstance from "@/axios/axiosInstance";
import { OrderProps } from "@/types";

export async function fetchOrders(): Promise<OrderProps[]> {
  const response = await axiosInstance.get("/orders");
  return response.data;
}

export async function fetchWeeklyRevenue(): Promise<number> {
  const response = await axiosInstance.get("/orders/revenue/weekly");
  return response.data;
}

export async function fetchMonthlyRevenue(): Promise<number> {
  const response = await axiosInstance.get("/orders/revenue/monthly");
  return response.data;
}
