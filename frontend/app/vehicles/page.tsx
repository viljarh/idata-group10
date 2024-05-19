"use client";
import { useState, useEffect, FormEvent } from "react";
import Container from "@/components/ui/Container";
import { VehicleProps } from "@/types";
import { fetchVehicles } from "@/app/api/vehicles/fetchVehicles";
import VehicleList from "@/components/VehicleList";
import VehicleDetails from "@/components/VehicleDetails";
import { DatePickerWithRange } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, Menu} from "lucide-react";


const VehiclePage = () => {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleProps | null>(null);
  const [carSize, setCarSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortVehiclesAfterPrice, setSortVehiclesAfterPrice] = useState("");
  const carType = ["Sedan", "Van", "SUV", "Coupe", "Compact"];
  const [carEngine, setCarEngineType] = useState("");
  const carFuelType = ["Petrol", "Diesel", "Electric"];
  const [inputVehicleType, setInputVehicleType] = useState("");



  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log("Search criteria:", { carSize, startDate, endDate, inputVehicleType, sortVehiclesAfterPrice });
  };
  const filteredVehicles = vehicles.filter(vehicle => 
    (!carSize || vehicle.vehicleCategory.toLowerCase() === carSize.toLowerCase()) &&
    (!inputVehicleType.toLowerCase() || vehicle.model.toLowerCase().includes(inputVehicleType.toLowerCase())|| vehicle.manufacturer.toLowerCase().includes(inputVehicleType.toLowerCase()))&& 
    (!carEngine || vehicle.fuel.toLowerCase() === carEngine.toLowerCase())).sort((a,b)=>{
      if(sortVehiclesAfterPrice === "asc") {
        return a.dailyPrice - b.dailyPrice;
      }
      else if (sortVehiclesAfterPrice === "desc"){
        return b.dailyPrice - a.dailyPrice;
      }
      else {
        return 0;
      }
    
    });

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
      <div className="relative sm:px-6 lg:px-8 flex w-full h-full flex justify-center items-center p-5">
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
              <Filter className = "h-6 md:hidden w-6"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <form onSubmit={handleSearch} className="flex flex-col gap-4 justify-center">
            <Input type="text" 
            placeholder="Search for a Vehicle" 
            value={inputVehicleType} onChange={(e) => setInputVehicleType(e.target.value)}
            className="w-full"/>
            <select
              value={carSize}
              onChange={(e) => setCarSize(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Car Type</option>
              {carType.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <select
              value={carEngine}
              onChange={(e) => setCarEngineType(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Fuel</option>
              {carFuelType.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
            <select
              value={sortVehiclesAfterPrice}
              onChange={(e) => setSortVehiclesAfterPrice(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value= "">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
            <DatePickerWithRange />
            <Button type="submit">Search</Button>
          </form>


            </SheetContent>
          </Sheet>
          <div className="hidden md:flex">
          <form onSubmit={handleSearch} className="flex flex-wrap gap-4 justify-center md:flex">
            <Input type="text" 
            placeholder="Search for a Vehicle" 
            value={inputVehicleType} onChange={(e) => setInputVehicleType(e.target.value)}
            className="w-full"/>
            <select
              value={carSize}
              onChange={(e) => setCarSize(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Car Type</option>
              {carType.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <select
              value={carEngine}
              onChange={(e) => setCarEngineType(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="">Select Fuel</option>
              {carFuelType.map((fuel) => (
                <option key={fuel} value={fuel}>
                  {fuel}
                </option>
              ))}
            </select>
            <select
              value={sortVehiclesAfterPrice}
              onChange={(e) => setSortVehiclesAfterPrice(e.target.value)}
              className="p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value= "">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
            <DatePickerWithRange />
            <Button type="submit">Search</Button>
          </form>
          </div>
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
