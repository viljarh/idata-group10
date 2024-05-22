"use client";
import {
  fetchVehicles,
  getPopularVehicles,
} from "@/app/api/vehicles/fetchVehicles";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { DicesIcon, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { VehicleProps } from "@/types";
import VehicleList from "@/components/VehicleList";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { decode } from "jsonwebtoken";
import axiosInstance from "@/axios/axiosInstance";

interface MyJwtPayload {
  userId: number;
}

export default function Home() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);
  const [popularVehicles, setPopularVehicles] = useState<VehicleProps[]>([]);
  const [randomVehicle, setRandomVehicle] = useState<VehicleProps | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehiclesData = await fetchVehicles();
        setVehicles(vehiclesData);

        const popularVehiclesData = await getPopularVehicles();
        setPopularVehicles(popularVehiclesData);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchData();
  }, []);

  const getRandomVehicle = () => {
    if (vehicles.length > 0) {
      const randomIndex = Math.floor(Math.random() * vehicles.length);
      setRandomVehicle(vehicles[randomIndex]);
    }
  };

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token && randomVehicle) {
        const decoded = decode(token) as MyJwtPayload;
        const userId = decoded.userId;

        await axiosInstance.post(
          "/cart/add",
          { vehicleId: randomVehicle.vehicleId, quantity: 1 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Vehicle added to the cart");
      } else {
        alert("Please login to add vehicles to the cart");
      }
    } catch (error) {
      console.error("Failed to add vehicle to cart: ", error);
      alert("Failed to add vehicle to cart");
    }
  };

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/aalesund-ai.jpg)` }}
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
              <p className="text-3xl font-bold ">
                Welcome back, {user.firstName}!
              </p>
            </div>
          ) : (
            <p className="text-3xl font-bold">Welcome</p>
          )}
        </div>
        <div className="s">
          <div className="flex flex-col justify-center items-center">
            <DicesIcon
              size={40}
              onClick={getRandomVehicle}
              className="cursor-pointer hoved:text-blue"
            />
            <p className="font-mono">Try your luck</p>
          </div>
        </div>
        {randomVehicle && (
          <div className="flex justify-center items-center">
            <div className="p-4 border rounded-lg shadow-md w-1/2">
              <h2 className="text-xl font-bold">
                {randomVehicle.manufacturer} {randomVehicle.model}
              </h2>
              <p>Year: {randomVehicle.year}</p>
              <p>Price: {randomVehicle.dailyPrice} NOK / day</p>
              <Button onClick={addToCart} className="w-full">
                Add to cart
              </Button>
            </div>
          </div>
        )}
        <div
          id="popular-cars"
          className="w-full h-full flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Popular Cars</h1>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <VehicleList vehicles={popularVehicles} />
        </div>
      </div>
    </Container>
  );
}
