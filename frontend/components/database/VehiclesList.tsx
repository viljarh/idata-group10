import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VehicleProps } from '@/types';

{/*
interface Vehicle {
    vehicleId: number;
    manufacture: string;
    modelType: string;
    modelYear: string;
    vehicleCategory: string;
    transmissionType: string;
    fuelType: string;
    passengerCapacity: number;
    extraFeatures: Text;
    mileage : number;
    image: string;
    dailyPrice: number;
}
*/}


const VehiclesList = () => {
    const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

    useEffect(()=> {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get<VehicleProps[]>('/api/vehicles');
                setVehicles(response.data);
                console.log('Fetched cars:', response.data)
            } catch (error) {
                console.error('Error fetching vehicles', error);
            }
        };

        fetchVehicles();
    }, []);

    return vehicles;
};

export default VehiclesList;
