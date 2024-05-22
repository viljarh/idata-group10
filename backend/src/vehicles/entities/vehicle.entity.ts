import { ApiProperty } from '@nestjs/swagger';
import { Vehicle } from '@prisma/client';

export class VehicleEntity implements Vehicle {
  @ApiProperty()
  vehicleId: number;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  vehicleCategory: string;

  @ApiProperty()
  transmission: string;

  @ApiProperty()
  fuel: string;

  @ApiProperty()
  passengerCapacity: number;

  @ApiProperty()
  extraFeatures: string;

  @ApiProperty()
  mileage: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  dailyPrice: number;

  @ApiProperty()
  rentalCount: number;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  rentalCompany: string;
}
