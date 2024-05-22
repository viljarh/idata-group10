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
  image?: string;
  active: boolean;
  rentalCompany: string;
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
  onToggleActive: (vehicleId: number, isActive: boolean) => void;
}

export interface UserTableProps {
  users: UserProps[];
  onDelete: (userId: number) => void;
}

export interface OrderItemProps {
  orderItemId: number;
  vehicle: VehicleProps;
  quantity: number;
  price: number;
}

export interface OrderProps {
  orderId: number;
  user: UserProps;
  createdAt: string;
  orderStatus: string;
  totalPrice: number;
  OrderItems: OrderItemProps[];
}
