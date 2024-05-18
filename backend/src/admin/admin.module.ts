import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthModule } from 'src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AdminController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [AuthModule],
})
export class AdminModule {}
