import axiosInstance from "@/axios/axiosInstance";
import { VehicleProps } from "@/types";

export async function fetchVehicles(): Promise<VehicleProps[]> {
  try {
    const response = await axiosInstance.get("/vehicles");
    const activeVehicles = response.data.filter(
      (vehicle: VehicleProps) => vehicle.active
    );
    return activeVehicles;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
}

export async function getPopularVehicles(): Promise<VehicleProps[]> {
  try {
    const response = await axiosInstance.get("/vehicles/popular");
    const activeVehicles = response.data.filter(
      (vehicle: VehicleProps) => vehicle.active
    );
    return activeVehicles;
  } catch (error) {
    console.error("Error fetching popular vehicles:", error);
    return [];
  }
}
