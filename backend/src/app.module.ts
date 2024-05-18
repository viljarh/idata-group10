import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [PrismaModule, VehiclesModule, UsersModule, AuthModule, RolesModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
