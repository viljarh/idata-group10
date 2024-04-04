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
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full p-6 py-[16px] rounded-full bg-primary items-center"
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
            <Label htmlFor="name">Car Name</Label>
            <p className="font-medium">Car Name</p>
            <Label>Car Size</Label>
            <p className="font-medium">Car Size</p>
            <Label>Transmission</Label>
            <p className="font-medium">Transmission</p>
            <Label>Fuel Type</Label>
            <p className="font-medium">Fuel Type</p>
          </div>
        </div>

        <Button>Rent</Button>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetails;
