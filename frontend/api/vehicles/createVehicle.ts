import { NextApiRequest, NextApiResponse } from "next";
import { VehicleProps } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        manufacturer,
        model,
        year,
        vehicleCategory,
        transmission,
        fuel,
        passengerCapacity,
        mileage,
        dailyPrice,
        image,
      }: VehicleProps = req.body;

      const response = await fetch("http://localhost:8080/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          manufacturer,
          model,
          year,
          vehicleCategory,
          transmission,
          fuel,
          passengerCapacity,
          mileage,
          dailyPrice,
          image,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return res.status(201).json(data);
      } else {
        return res
          .status(response.status)
          .json({ message: "Failed to create vehicle on the server" });
      }
    } catch (error) {
      console.error("Error creating vehicle:", error);
      res.status(500).json({ message: "Failed to create vehicle" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
