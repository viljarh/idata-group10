import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  model: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  year: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  vehicleCategory: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  transmission: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  fuel: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  passengerCapacity: number;

  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  extraFeatures: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  mileage: number;


  @IsString()
  @IsOptional()
  @ApiProperty({required: false})
  image?: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  dailyPrice: number;
}
