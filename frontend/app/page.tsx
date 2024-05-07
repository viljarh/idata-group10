"use client";
import { fetchVehicles } from "@/api/vehicles/fetchVehicles";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { VehicleProps } from "@/types";

export default function Home() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const [carSize, setCarSize] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const carType = ["Sedan", "Van", "SUV", "Coupe", "Electric"];
  const handleSearch = () => {
    console.log("Search criteria:", { carSize, startDate, endDate });
  };

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
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/aalesund-1.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/75 p-4 rounded-lg">
                <a href="#search-cars" className="block w-full">
                  <Button size="lg" className="w-full py-8 text-xl">
                    <ShoppingBag className="mr-2" />
                    Rent A Car Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="search-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Search for cars</h1>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          {/* TODO IMPLEMENT SEARCH FUNCTION */}
          <div className="flex justify-center items-center border">
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
              <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </form>
          </div>
        </div>
        <div
          id="popular-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Popular Cars</h1>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList vehicles={vehicles} />
        </div>
      </div>
    </Container>
  );
}
