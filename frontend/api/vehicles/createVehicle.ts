import { NextApiRequest, NextApiResponse } from 'next';
import { VehicleProps } from '@/types'; // Import the VehicleProps interface

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { manufacturer, model, year, fuel, transmission, passengerCapacity, extraFeatures, dailyPrice }: VehicleProps = req.body;

      // Assuming you have an API endpoint for creating a vehicle on your backend server
      const response = await fetch('http://localhost:8080/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          manufacturer,
          model,
          year,
          fuel,
          transmission,
          passengerCapacity,
          extraFeatures,
          dailyPrice,
        }),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        // Return the response from the backend server
        return res.status(201).json(data);
      } else {
        // If the request failed, return an error message
        return res.status(500).json({ message: 'Failed to create vehicle on the server' });
      }
    } catch (error) {
      console.error('Error creating vehicle:', error);
      res.status(500).json({ message: 'Failed to create vehicle' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
