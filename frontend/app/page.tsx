"use client";
import { fetchVehicles } from "@/app/api/vehicles/fetchVehicles";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { VehicleProps } from "@/types";
import VehicleList from "@/components/VehicleList";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const { user, logout } = useAuth()

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
                <Link href="/vehicles" className="block w-full">
                  <Button size="lg" className="w-full py-8 text-xl">
                    <ShoppingBag className="mr-2" />
                    Rent A Car Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center p-5">
          {user ? (
            <div>
              <p className="text-3xl font-bold ">Welcome back, {user.firstName}!</p>
              <Button onClick={logout} className="w-full">Logout</Button>
            </div>
          ) : (
            <p className="font-mono">Please log in to rent a car.</p>
          )}
        </div>
        <div
          id="popular-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Popular Cars</h1>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <VehicleList vehicles={vehicles} />
        </div>
      </div>
    </Container>
  );
}
