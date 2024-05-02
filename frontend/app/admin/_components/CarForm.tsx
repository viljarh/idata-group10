"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom"; // Assuming you have an equivalent vehicle management hooks

export function CarForm() {
  const [vehicle, setVehicle] = useState({
    manufacturer: "",
    model: "",
    year: "",
    vehicleCategory: "",
    transmission: "",
    fuel: "",
    passengerCapacity: 0,
    mileage: 0.0,
    dailyPrice: 0.0,
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8080/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vehicle),
      });

      if (!response.ok) throw new Error("Failed to create vehicle");
      const result = await response.json();
      console.log("Vehicle created:", result);
      router.push("/admin/vehicles");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error creating vehicle.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center p-6 py-10 mb-2"
    >
      <div className="space-y-2">
        <Label htmlFor="manufacturer">Manufacturer</Label>
        <Input
          type="text"
          id="manufacturer"
          name="manufacturer"
          required
          value={vehicle.manufacturer}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="model">Model</Label>
        <Input
          type="text"
          id="model"
          name="model"
          required
          value={vehicle.model}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="year">Year</Label>
        <Input
          type="text"
          id="year"
          name="year"
          required
          value={vehicle.year}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="vehicleCategory">Category</Label>
        <select
          id="vehicleCategory"
          name="vehicleCategory"
          required
          value={vehicle.vehicleCategory}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select a category</option>
          <option value="compact">Compact</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="transmission">Transmission</Label>
        <select
          id="transmission"
          name="transmission"
          required
          value={vehicle.transmission}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select transmission type</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
      <div className="space-y-2 space-x-2">
        <Label htmlFor="fuel">Fuel</Label>
        <select
          id="fuel"
          name="fuel"
          required
          value={vehicle.fuel}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select fuel type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="passengerCapacity">Passenger Capacity</Label>
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
        <Label htmlFor="mileage">Mileage</Label>
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
        <Label htmlFor="dailyPrice">Daily Price</Label>
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
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" onChange={handleChange} />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus(); // You will need to handle form status similarly.
  return (
    <Button type="submit" disabled={pending} className="p-4 py-4">
      {pending ? "Adding..." : "Add Vehicle"}
    </Button>
  );
}
