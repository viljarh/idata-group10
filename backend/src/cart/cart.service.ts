import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CartItem } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(data: {
    userId: number;
    vehicleId: number;
    quantity: number;
  }): Promise<CartItem> {
    return this.prisma.cartItem.create({
      data,
    });
  }

  async getCartItems(userId: number): Promise<CartItem[]> {
    return this.prisma.cartItem.findMany({
      where: { userId },
      include: { vehicle: true },
    });
  }

  async removeCartItem(cartItemId: number): Promise<void> {
    await this.prisma.cartItem.delete({
      where: { cartItemId },
    });
  }

  async clearCart(userId: number): Promise<void> {
    await this.prisma.cartItem.deleteMany({
      where: { userId },
    });
  }
}
