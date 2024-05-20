"use client";

import axiosInstance from "@/axios/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export function CarForm() {
  const [vehicle, setVehicle] = useState({
    manufacturer: "",
    model: "",
    year: "",
    vehicleCategory: "",
    transmission: "",
    fuel: "",
    passengerCapacity: 0,
    extraFeatures: "",
    mileage: 0.0,
    dailyPrice: 0.0,
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    const isNumberField = [
      "passengerCapacity",
      "mileage",
      "dailyPrice",
    ].includes(name);
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: isNumberField ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Submitting vehicle with data:", vehicle);

    try {
      const response = await axiosInstance.post("/vehicles", vehicle);
      if (!response.data) {
        setError(
          `Error creating vehicle: ${response.statusText || "Unknown error"}`
        );
        throw new Error("Failed to create vehicle");
      }

      console.log("Vehicle created:", response.data);
      router.push("/vehicles");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error creating vehicle");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center p-10">
      <div className="space-y-2">
        <Label htmlFor="manufacturer" className="from-neutral-800 font-mono">
          Manufacturer
        </Label>
        <Input
          placeholder="Manufacturer"
          type="text"
          id="manufacturer"
          name="manufacturer"
          required
          value={vehicle.manufacturer}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="model" className="from-neutral-800 font-mono">
          Model
        </Label>
        <Input
          placeholder="Model"
          type="text"
          id="model"
          name="model"
          required
          value={vehicle.model}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="year" className="from-neutral-800 font-mono">
          Year
        </Label>
        <Input
          placeholder="Year"
          type="text"
          id="year"
          name="year"
          required
          value={vehicle.year}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="vehicleCategory" className="from-neutral-800 font-mono">
          Category
        </Label>
        <select
          id="vehicleCategory"
          name="vehicleCategory"
          required
          value={vehicle.vehicleCategory}
          onChange={handleChange}
          className="form-select border"
        >
          <option value="">Select a category</option>
          <option value="compact">Compact</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="transmission" className="from-neutral-800 font-mono">
          Transmission
        </Label>
        <select
          id="transmission"
          name="transmission"
          required
          value={vehicle.transmission}
          onChange={handleChange}
          className="form-select border"
        >
          <option value="">Select transmission type</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="fuel" className="from-neutral-800 font-mono">
          Fuel
        </Label>
        <select
          id="fuel"
          name="fuel"
          required
          value={vehicle.fuel}
          onChange={handleChange}
          className="form-select border"
        >
          <option value="">Select fuel type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="passengerCapacity"
          className="from-neutral-800 font-mono"
        >
          Passenger Capacity
        </Label>
        <Input
          type="number"
          id="passengerCapacity"
          name="passengerCapacity"
          required
          value={vehicle.passengerCapacity}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="extraFeatures" className="from-neutral-800 font-mono">
          Extra Features
        </Label>
        <Input
          type="text"
          id="extraFeatures"
          name="extraFeatures"
          required
          value={vehicle.extraFeatures}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mileage" className="from-neutral-800 font-mono">
          Mileage
        </Label>
        <Input
          type="number"
          id="mileage"
          name="mileage"
          required
          value={vehicle.mileage}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dailyPrice" className="from-neutral-800 font-mono">
          Daily Price
        </Label>
        <Input
          type="number"
          id="dailyPrice"
          name="dailyPrice"
          required
          value={vehicle.dailyPrice}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="model" className="from-neutral-800 font-mono">
          Image
        </Label>
        <Input
          placeholder="Image URL"
          type="text"
          id="image"
          name="image"
          value={vehicle.image}
          onChange={handleChange}
          required
        ></Input>
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="mt-5">
      {pending ? "Adding..." : "Add Vehicle"}
    </Button>
  );
}
