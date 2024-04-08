import { Vehicle } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class VehicleEntity{
    @ApiProperty()
    vehicleId: number;

    @ApiProperty()
    manufacture: string;

    @ApiProperty()
    modelType: string;


    @ApiProperty()
    modelYear: string;

    @ApiProperty()
    vehicleCategory: string;

    @ApiProperty()
    transmissionType: string;

    @ApiProperty()
    fuelType: string;

    @ApiProperty()
    passengerCapacity: number;

    @ApiProperty()
    luggageCapacity: number;

    @ApiProperty()
    extraFeatures: string;

    @ApiProperty()
    mileage: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    dailyPrice: number;

}
