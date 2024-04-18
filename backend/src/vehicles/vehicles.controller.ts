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

  @Get(':id')
  @ApiOkResponse({ type: VehicleEntity })
  async findOne(@Param('id') id: number) {
    const vehicle = await this.vehiclesService.findOne(+id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ${id} does not exist.`);
    }
    return vehicle;
  }

  @Patch(':id')
  @ApiOkResponse({ type: VehicleEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: VehicleEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.vehiclesService.remove(id);
  }
}
