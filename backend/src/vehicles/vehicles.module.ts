import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService],
  imports: [PrismaModule],
})
export class VehiclesModule {}
