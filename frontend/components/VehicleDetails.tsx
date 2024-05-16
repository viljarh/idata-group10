import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { VehicleProps } from "@/types";
import { StarIcon } from "lucide-react";
import axiosInstance from "@/axios/axiosInstance"; // Import your axios instance

function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

interface VehicleDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  vehicle: VehicleProps;
}

const VehicleDetails = ({
  isOpen,
  closeModal,
  vehicle,
}: VehicleDetailsProps) => {
  if (!vehicle) {
    return null;
  }
  if (!vehicle) {
    return null;
  }

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const userId = "user-id";
        const response = await axiosInstance.get(`/favorites/check`, {
          params: { userId, vehicleId: vehicle.vehicleId },
        });
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        console.error("Error fetching favorite status", error);
      }
    };

    if (vehicle.vehicleId) {
      fetchFavoriteStatus();
    }
  }, [vehicle]);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await axiosInstance.delete(`/favorites/${vehicle.vehicleId}`);
      } else {
        await axiosInstance.post("/favorites", {
          vehicleId: vehicle.vehicleId,
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorite status", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full p-6 py-[16px] bg-primary items-center text-white dark:text-black"
        >
          View More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize flex flex-row items-center">
            {capitalizeWords(`${vehicle.manufacturer} ${vehicle.model}`)}
            <StarIcon
              size={20}
              className={`ml-2 cursor-pointer ${
                isFavorite ? "text-yellow-500" : ""
              }`}
              onClick={toggleFavorite}
            />
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-x-4">
            <Label htmlFor="name">Car Maker</Label>
            <p className="capitalize">
              {capitalizeWords(`${vehicle.manufacturer}`)}
            </p>
            <Label>Car Model</Label>
            <p className="capitalize">{capitalizeWords(`${vehicle.model}`)}</p>
            <Label>Year</Label>
            <p className="capitalize">{capitalizeWords(`${vehicle.year}`)}</p>
            <Label>Fuel Type</Label>
            <p className="capitalize">{capitalizeWords(`${vehicle.fuel}`)}</p>
            <Label>Transmission type</Label>
            <p className="capitalize">
              {capitalizeWords(`${vehicle.transmission}`)}
            </p>
            <Label>Number Of Seats</Label>
            <p className="capitalize">
              {capitalizeWords(`${vehicle.passengerCapacity}`)}
            </p>
            <Label>Extra Features</Label>
            <p className="capitalize">
              {capitalizeWords(`${vehicle.extraFeatures}`)}
            </p>
            <Label>Price</Label>
            <p className="capitalize">
              {capitalizeWords(`${vehicle.dailyPrice}`)}
            </p>
          </div>
        </div>

        <Button>Rent</Button>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetails;
