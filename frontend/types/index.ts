export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
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
