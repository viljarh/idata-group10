import { VehicleProps } from "@/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  vehicles: VehicleProps[];
  onCarDetailsOpen?: (car: VehicleProps) => void;
}

const ProductList: React.FC<ProductListProps> = ({ vehicles }) => {
  if (!vehicles || vehicles.length === 0) {
    return <p className="from-neutral-800 font-mono">No vehicles available...</p>;
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vehicles.map((item) => (
          <ProductCard key={item.vehicleId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
