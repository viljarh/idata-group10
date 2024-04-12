import { VehicleProps } from "@/types";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  vehicle: VehicleProps[]; 
}

const ProductList: React.FC<ProductListProps> = ({ vehicle }) => {
  if (!vehicle) {
    return <p>No vehicles available</p>;
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vehicle.map((item) => (
          <ProductCard key={item.vehicleId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
