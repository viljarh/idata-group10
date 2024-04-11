import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { VehiclesModule } from "./vehicles/vehicles.module";
import { PrismaService } from "./prisma/prisma.service";
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, VehiclesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
