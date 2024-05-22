"use client";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { VehicleProps } from "@/types";
import VehicleList from "@/components/VehicleList";
import axiosInstance from "@/axios/axiosInstance";
import { decode } from "jsonwebtoken";

interface MyJwtPayload {
  userId: number;
}

const FavoritesPage = () => {
  const [favoriteVehicles, setFavoriteVehicles] = useState<VehicleProps[]>([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = decode(token) as MyJwtPayload;
        const userId = decoded.userId;

        const response = await axiosInstance.get(`/favorites`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavoriteVehicles(response.data.map((fav: any) => fav.vehicle));
      }
    } catch (error) {
      console.error("Failed to fetch favorite vehicles: ", error);
    }
  };

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <h1 className="text-3xl font-bold">Your Favorite Vehicles</h1>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <VehicleList vehicles={favoriteVehicles} />
        </div>
      </div>
    </Container>
  );
};

export default FavoritesPage;
