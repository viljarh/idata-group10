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

export interface VehicleTableProps {
  vehicles: VehicleProps[];
  onDelete: (vehicleId: number) => void;
}

export interface UserTableProps {
  users: UserProps[];
  onDelete: (userId: number) => void
}