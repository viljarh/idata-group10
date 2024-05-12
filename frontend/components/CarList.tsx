import { VehicleProps } from "@/types";
import CarCard from "./CarCard";

interface CarListProps {
  vehicles: VehicleProps[];
  onCarDetailsOpen?: (car: VehicleProps) => void;
}

const CarList: React.FC<CarListProps> = ({ vehicles }) => {
  if (!vehicles || vehicles.length === 0) {
    return <p className="from-neutral-800 font-mono">No vehicles available...</p>;
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {vehicles.map((item) => (
          <CarCard key={item.vehicleId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
