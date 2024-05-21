import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.prisma.vehicle.create({ data: createVehicleDto });
  }

  findAll() {
    return this.prisma.vehicle.findMany();
  }

  findOne(id: number) {
    return this.prisma.vehicle.findUnique({ where: { vehicleId: id } });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto) {
    try {
      const vehicle = await this.prisma.vehicle.findUnique({
        where: { vehicleId: id },
      });
      if (!vehicle) {
        throw new Error(`Vehicle with ID ${id} not found`);
      }
      return this.prisma.vehicle.update({
        where: { vehicleId: id },
        data: updateVehicleDto,
      });
    } catch (error) {
      throw new Error(
        `Failed to update vehicle with ID ${id}: ${error.message}`,
      );
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.prisma.vehicle.delete({ where: { vehicleId: id } });
    } catch (error) {
      throw new Error(
        `Failed to delete vehicle with ID ${id}: ${error.message}`,
      );
    }
  }

  async setVehicleStatus(id: number, active: boolean) {
    try {
      const vehicle = await this.prisma.vehicle.findUnique({
        where: { vehicleId: id },
      });
      if (!vehicle) {
        throw new Error(`Vehicle with ID ${id} not found`);
      }
      return this.prisma.vehicle.update({
        where: { vehicleId: id },
        data: { active },
      });
    } catch (error) {
      throw new Error(`Failed to update vehicle status: ${error.message}`);
    }
  }

  async getPopularVehicles() {
    const vehicles = await this.prisma.vehicle.findMany({
      orderBy: { rentalCount: 'desc' },
      take: 10,
    });
    return vehicles;
  }
}
