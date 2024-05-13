"use client";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { VehicleProps } from "@/types";
import { fetchVehicles } from "@/api/vehicles/fetchVehicles"; // Import the fetchVehicles function
import VehicleList from "@/components/VehicleList";
import VehicleDetails from "@/components/VehicleDetails";

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleProps | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehiclesData = await fetchVehicles();
        setVehicles(vehiclesData);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchData();
  }, []);

  const handleCarDetailsOpen = (car: VehicleProps) => {
    setSelectedVehicle(car);
    setIsCarDetailsOpen(true);
  };

  const handleCarDetailsClose = () => {
    setIsCarDetailsOpen(false);
  };

  return (
    <Container>
      <div className="p-5 h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <h1 className="font-bold text-2xl">All Cars</h1>
      </div>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <VehicleList
            vehicles={vehicles}
            onCarDetailsOpen={handleCarDetailsOpen}
          />
        </div>
      </div>
      {isCarDetailsOpen && selectedVehicle && (
        <VehicleDetails
          isOpen={isCarDetailsOpen}
          closeModal={handleCarDetailsClose}
          vehicle={selectedVehicle}
        />
      )}
    </Container>
  );
};

export default VehiclePage;
