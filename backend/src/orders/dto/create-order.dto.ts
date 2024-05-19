import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  vehicleId: number;

  @IsDateString()
  @IsNotEmpty()
  rentalDateFrom: string;

  @IsDateString()
  @IsNotEmpty()
  rentalDateTo: string;

  @IsNumber()
  @IsNotEmpty()
  totalPrice: number;
}
