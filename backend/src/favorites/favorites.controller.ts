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

@Controller('favorites')
@UseGuards(JwtAuthGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':vehicleId')
  async addFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @GetUser('userId') userId: number,
  ) {
    return this.favoritesService.addFavorite(userId, vehicleId);
  }

  @Delete(':vehicleId')
  async removeFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @GetUser('userId') userId: number,
  ) {
    return this.favoritesService.removeFavorite(userId, vehicleId);
  }

  @Get()
  async getFavorites(@GetUser('userId') userId: number) {
    return this.favoritesService.getFavorites(userId);
  }

  @Get('check')
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
