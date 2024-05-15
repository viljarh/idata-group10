"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function EditVehicle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get("vehicleId");
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
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (vehicleId) {
      fetchVehicle(vehicleId);
    }
  }, [vehicleId]);

  async function fetchVehicle(id: string | string[]) {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/vehicles/${id}`);
      if (!response.ok) throw new Error("Failed to fetch vehicle");
      const data = await response.json();
      setVehicle(data);
    } catch (error) {
      console.error("Fetch vehicle failed:", error);
      setError("Failed to load vehicle data.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/vehicles/${vehicleId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(vehicle),
        }
      );
      if (!response.ok) throw new Error("Failed to update vehicle");
      alert("Vehicle updated successfully");
      router.push("/admin/vehicles");
    } catch (error) {
      console.error("Update vehicle failed:", error);
      setError("Failed to update vehicle.");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target;
    setVehicle((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <h1 className="flex items-center justify-center text-2xl mt-4">
        Edit Vehicle
      </h1>
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
        <div className="space-y-2">
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
        <div className="space-y-2">
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
        <div className="space-y-2">
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
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={vehicle.imageUrl}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" disabled={loading} className="mt-5">
          Update Vehicle
        </Button>
      </form>
      {error && <p className="font-mono">{error}</p>}
    </div>
  );
}
