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
  manufacture: string;
  modelType: string;
  modelYear: string;
  vehicleCategory: string;
  transmissionType: string;
  fuelType: string;
  passengerCapacity: number;
  extraFeatures: string;
  mileage: number;
  image: string;
  dailyPrice: number;
}