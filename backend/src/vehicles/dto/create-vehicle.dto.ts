export class CreateVehicleDto {
        readonly vehicleId: number;
        readonly manufacture: string;
        readonly modelType: string;
        readonly modelYear: string;
        readonly vehicleCategory: string;
        readonly transmissionType: string;
        readonly fuelType: string;
        readonly passengerCapacity: number;
        readonly extraFeatures: string;
        readonly mileage: number;
        readonly image: string;
        readonly dailyPrice: number;
    }
    