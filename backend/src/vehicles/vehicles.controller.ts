import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VehicleEntity } from './entities/vehicle.entity';

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiCreatedResponse({ type: VehicleEntity })
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  @ApiOkResponse({ type: VehicleEntity })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('popular')
  getPopularVehicles() {
    return this.vehiclesService.getPopularVehicles();
  }

  @Get(':id')
  @ApiOkResponse({ type: VehicleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const vehicle = await this.vehiclesService.findOne(id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ${id} does not exist.`);
    }
    return vehicle;
  }

  @Patch(':id')
  @ApiOkResponse({ type: VehicleEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    try {
      const updatedVehicle = await this.vehiclesService.update(
        id,
        updateVehicleDto,
      );
      if (!updatedVehicle) {
        throw new NotFoundException(`Vehicle with ID ${id} does not exist`);
      }
      return updatedVehicle;
    } catch (error) {
      throw new BadRequestException(
        `Failed to update vehicle with ID ${id}: ${error.message}`,
      );
    }
  }

  @Patch(':id/active')
  @ApiOkResponse({ type: VehicleEntity })
  async setVehicleStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { active: boolean },
  ) {
    try {
      const updatedVehicle = await this.vehiclesService.setVehicleStatus(
        id,
        body.active,
      );
      if (!updatedVehicle) {
        throw new NotFoundException(`Vehicle with ID ${id} does not exist`);
      }
      return updatedVehicle;
    } catch (error) {
      throw new BadRequestException(
        `Failed to update vehicle status with ID ${id}: ${error.message}`,
      );
    }
  }

  @Delete(':id')
  @ApiOkResponse({ type: VehicleEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.vehiclesService.remove(id);
      return { message: `Vehicle with ID ${id} deleted successfully` };
    } catch (error) {
      throw new BadRequestException(
        `Failed to delete vehicle with ID ${id}: ${error.message}`,
      );
    }
  }
}
