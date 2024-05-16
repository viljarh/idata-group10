import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async addFavorite(userId: number, vehicleId: number) {
    return this.prisma.favorite.create({
      data: {
        userId,
        vehicleId,
      },
    });
  }

  async removeFavorite(userId: number, vehicleId: number) {
    return this.prisma.favorite.deleteMany({
      where: {
        userId,
        vehicleId,
      },
    });
  }

  async getFavorites(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { vehicle: true },
    });
  }
}
