import axiosInstance from "@/axios/axiosInstance";
import { VehicleProps } from "@/types";

export async function fetchVehicles(): Promise<VehicleProps[]> {
  try {
    const response = await fetch('http://localhost:8080/vehicles');
    if (!response.ok) {
      throw new Error('Failed to fetch vehicles');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
}

export async function getPopularVehicles(): Promise<VehicleProps[]> {
  const response = await axiosInstance.get("/vehicles/popular");
  return response.data;
}
