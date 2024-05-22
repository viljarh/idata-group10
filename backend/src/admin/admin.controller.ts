import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@Roles('ADMIN')
export class AdminController {
  @Get()
  @ApiOperation({ summary: 'Get admin data' })
  @ApiOkResponse({ description: 'Admin data retrieved successfully' })
  getAdminData() {
    return 'This is admin data';
  }
}
