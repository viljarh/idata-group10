import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService],
  imports: [PrismaModule],
})
export class VehiclesModule {}
