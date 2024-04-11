import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from '../prisma/prisma.service';
import { isNumber } from '@nestjs/common/utils/shared.utils';
import { Vehicle } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto) {
    //return 'This action adds a new vehicle';
    return this.prisma.vehicle.create({ data: createVehicleDto});
  }

  findAll() {
    //return `This action returns all vehicles`;
    return this.prisma.vehicle.findMany({ where: { vehicleId: { gt: 0 } } });
  }

  findOne(id: number) {
    //return `This action returns a #${id} vehicle`;
    return this.prisma.vehicle.findUnique({ where: { vehicleId: id } });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    //return `This action updates a #${id} vehicle`;
    return this.prisma.vehicle.update({
      where: { vehicleId: id },
      data: updateVehicleDto,
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} vehicle`;
    return this.prisma.vehicle.delete({ where: { vehicleId: id } });
  }
}
