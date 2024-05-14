"use client";
import { useState, useEffect, FormEvent } from "react";
import Container from "@/components/ui/Container";
import { VehicleProps } from "@/types";
import { fetchVehicles } from "@/api/vehicles/fetchVehicles";
import VehicleList from "@/components/VehicleList";
import VehicleDetails from "@/components/VehicleDetails";
import { DatePickerWithRange } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleProps | null>(
    null
  );
  const [carSize, setCarSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const carType = ["Sedan", "Van", "SUV", "Coupe", "Compact"];


  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log("Search criteria:", { carSize, startDate, endDate });
  };
  const filteredVehicles = vehicles.filter(vehicle => !carSize || vehicle.vehicleCategory.toLowerCase() === carSize.toLowerCase());

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

      <div className="w-full h-full flex justify-center items-center p-5">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSearch} className="flex gap-4">
            <select
              value={carSize}
              onChange={(e) => setCarSize(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select Car Type</option>
              {carType.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <DatePickerWithRange />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>

      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <VehicleList
            vehicles={filteredVehicles}
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
