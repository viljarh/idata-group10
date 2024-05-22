import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FavoritesService } from './favorites.service';
import { GetUser } from 'src/auth/get-user.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('favorites')
@ApiTags('favorites')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':vehicleId')
  @ApiOperation({ summary: 'Add a vehicle to favorites' })
  @ApiResponse({ status: 201, description: 'Vehicle added to favorites.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async addFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @GetUser('userId') userId: number,
  ) {
    return this.favoritesService.addFavorite(userId, vehicleId);
  }

  @Delete(':vehicleId')
  @ApiOperation({ summary: 'Remove a vehicle from favorites' })
  @ApiResponse({ status: 200, description: 'Vehicle removed from favorites.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async removeFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @GetUser('userId') userId: number,
  ) {
    return this.favoritesService.removeFavorite(userId, vehicleId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all favorite vehicles' })
  @ApiResponse({ status: 200, description: 'Return favorite vehicles.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async getFavorites(@GetUser('userId') userId: number) {
    return this.favoritesService.getFavorites(userId);
  }

  @Get('check')
  @ApiOperation({ summary: 'Check if a vehicle is in favorites' })
  @ApiResponse({ status: 200, description: 'Return favorite status.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async checkFavorite(
    @GetUser('userId') userId: number,
    @Query('vehicleId', ParseIntPipe) vehicleId: number,
  ) {
    console.log(
      'Checking favorite status for user:',
      userId,
      'vehicle:',
      vehicleId,
    );
    return this.favoritesService.checkFavorite(userId, vehicleId);
  }
}
