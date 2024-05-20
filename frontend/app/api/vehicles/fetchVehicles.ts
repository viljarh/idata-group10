import axiosInstance from "@/axios/axiosInstance";
import { VehicleProps } from "@/types";

export async function fetchVehicles(): Promise<VehicleProps[]> {
  try {
    const response = await axiosInstance.get("/vehicles");
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
}

export async function getPopularVehicles(): Promise<VehicleProps[]> {
  try {
    const response = await axiosInstance.get("/vehicles/popular");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular vehicles:", error);
    return [];
  }
}
