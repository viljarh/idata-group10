import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) { }

  create(createVehicleDto: CreateVehicleDto) {
    return this.prisma.vehicle.create({ data: createVehicleDto });
  }

  findAll() {
    return this.prisma.vehicle.findMany();
  }

  findOne(id: number) {
    return this.prisma.vehicle.findUnique({ where: { vehicleId: id } });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.prisma.vehicle.update({
      where: { vehicleId: id },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    this.prisma.vehicle.delete({ where: { vehicleId: id } });
  }
}
