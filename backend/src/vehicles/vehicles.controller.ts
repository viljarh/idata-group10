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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { VehicleEntity } from './entities/vehicle.entity';

@Controller('vehicles')
@ApiTags('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiCreatedResponse({ type: VehicleEntity })
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vehicles' })
  @ApiOkResponse({ type: [VehicleEntity], description: 'List of all vehicles' })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('popular')
  @ApiOperation({ summary: 'Get popular vehicles' })
  @ApiOkResponse({
    type: [VehicleEntity],
    description: 'List of popular vehicles',
  })
  getPopularVehicles() {
    return this.vehiclesService.getPopularVehicles();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vehicle by ID' })
  @ApiOkResponse({ type: VehicleEntity, description: 'Details of the vehicle' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const vehicle = await this.vehiclesService.findOne(id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ${id} does not exist.`);
    }
    return vehicle;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vehicle by ID' })
  @ApiOkResponse({
    type: VehicleEntity,
    description: 'Updated vehicle details',
  })
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
  @ApiOperation({ summary: 'Set vehicle status by ID' })
  @ApiOkResponse({ type: VehicleEntity, description: 'Updated vehicle status' })
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
  @ApiOperation({ summary: 'Delete a vehicle by ID' })
  @ApiOkResponse({ description: 'Vehicle deleted successfully' })
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
