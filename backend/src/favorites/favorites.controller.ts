import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
@UseGuards(JwtAuthGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':vehicleId')
  async addFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @Param('userId') userId: number,
  ) {
    return this.favoritesService.addFavorite(userId, vehicleId);
  }

  @Delete(':vehicleId')
  async removeFavorite(
    @Param('vehicleId', ParseIntPipe) vehicleId: number,
    @Param('userId') userId: number,
  ) {
    return this.favoritesService.removeFavorite(userId, vehicleId);
  }

  @Get()
  async getFavorites(@Param('userId') userId: number) {
    return this.favoritesService.getFavorites(userId);
  }
}
