export interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  images: string[];
}

export interface CarProps {
  class: string;
  make: string;
  model: string;
  fuel_type: string;
  year: number;
  transmission: string;
}

export interface VehicleProps {
  vehicleId: number;
  manufacturer: string;
  model: string;
  year: string;
  vehicleCategory: string;
  transmission: string;
  fuel: string;
  passengerCapacity: number;
  extraFeatures: string;
  mileage: number;
  imageUrl: string;
  dailyPrice: number;
}