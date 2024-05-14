export interface VehicleProps {
  vehicleId: number;
  manufacturer: string;
  model: string;
  year: string;
  vehicleCategory: string;
  transmission: string;
  fuel: string;
  passengerCapacity: number;
  extraFeatures?: string;
  mileage: number;
  imageUrl?: string;
  dailyPrice: number;
}

export interface UserProps {
  userId: number;
  username: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  customerType: string;
}
