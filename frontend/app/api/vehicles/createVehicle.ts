import { NextApiRequest, NextApiResponse } from "next";
import { VehicleProps } from "@/types";
import axiosInstance from "@/axios/axiosInstance";

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
        imageUrl,
      }: VehicleProps = req.body;

      const response = await axiosInstance.post("/vehicles", {
        manufacturer,
        model,
        year,
        vehicleCategory,
        transmission,
        fuel,
        passengerCapacity,
        mileage,
        dailyPrice,
        imageUrl,
      });

      if (response.status === 201) {
        return res.status(201).json(response.data);
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
