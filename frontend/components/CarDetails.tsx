import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { VehicleProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  vehicle: VehicleProps;
}

const CarDetails = ({ isOpen, closeModal, vehicle }: CarDetailsProps) => {
  if (!vehicle) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full p-6 py-[16px] rounded-full bg-primary items-center text-white"
        >
          View More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Car Details</DialogTitle>
          <DialogDescription>Details about the car here.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-x-4">
            <Label htmlFor="name">Car Maker</Label>
            <p className="font-medium">{vehicle.manufacturer}</p>
            <Label>Car Model</Label>
            <p className="font-medium">{vehicle.model}</p>
            <Label>Year</Label>
            <p className="font-medium">{vehicle.year}</p>
            <Label>Fuel Type</Label>
            <p className="font-medium">{vehicle.fuel}</p>
            <Label>Transmission type</Label>
            <p className="font-medium">{vehicle.transmission}</p>
            <Label>Number Of Seats</Label>
            <p className="font-medium">{vehicle.passengerCapacity}</p>
            <Label>Extra Features</Label>
            <p className="font-medium">{vehicle.extraFeatures}</p>
            <Label>Price</Label>
            <p className="font-medium">{vehicle.dailyPrice}</p>
          </div>
        </div>

        <Button>Rent</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetails;
