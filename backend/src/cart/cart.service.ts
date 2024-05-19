import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: number, vehicleId: number, quantity: number) {
    return this.prisma.cartItem.create({
      data: {
        userId,
        vehicleId,
        quantity,
      },
    });
  }

  async getCartItems(userId: number) {
    return this.prisma.cartItem.findMany({
      where: { userId },
      include: { vehicle: true },
    });
  }

  async removeCartItem(userId: number, vehicleId: number) {
    return this.prisma.cartItem.deleteMany({
      where: {
        userId,
        vehicleId,
      },
    });
  }

  async clearCart(userId: number) {
    return this.prisma.cartItem.deleteMany({
      where: { userId },
    });
  }
}
