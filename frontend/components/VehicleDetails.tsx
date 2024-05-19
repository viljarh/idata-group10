"use client";
import React from "react";
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
import { decode } from "jsonwebtoken";
import axiosInstance from "@/axios/axiosInstance";

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

interface MyJwtPayload {
  userId: number;
}

const VehicleDetails = ({
  isOpen,
  closeModal,
  vehicle,
}: VehicleDetailsProps) => {
  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = decode(token) as MyJwtPayload;
        const userId = decoded.userId;

        await axiosInstance.post(
          "/cart/add",
          { userId, vehicleId: vehicle.vehicleId, quantity: 1 },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Vehicle added to the cart");
      }
    } catch (error) {
      console.error("Failed to add vehicle to cart: ", error);
      alert("Failed to add vehicle to cart");
    }
  };

  if (!vehicle) {
    return null;
  }

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

        <Button onClick={addToCart}>Rent</Button>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetails;
