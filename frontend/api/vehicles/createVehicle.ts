import { NextApiRequest, NextApiResponse } from 'next';
import { VehicleProps } from '@/types'; // Import the VehicleProps interface

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { manufacturer, model, year, fuel, transmission, passengerCapacity, extraFeatures, dailyPrice }: VehicleProps = req.body;

      if (!manufacturer || !model || !year || !fuel || !transmission || !passengerCapacity || !dailyPrice) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }

      console.log('New vehicle data:', {
        manufacturer,
        model,
        year,
        fuel,
        transmission,
        passengerCapacity,
        extraFeatures,
        dailyPrice,
      });

      res.status(201).json({ message: 'Vehicle created successfully' });
    } catch (error) {
      console.error('Error creating vehicle:', error);
      res.status(500).json({ message: 'Failed to create vehicle' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}