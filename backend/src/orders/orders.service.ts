import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: number) {
    const cartItems = await this.prisma.cartItem.findMany({
      where: { userId },
      include: { vehicle: true },
    });

    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.vehicle.dailyPrice * item.quantity,
      0,
    );

    const order = await this.prisma.order.create({
      data: {
        userId,
        totalPrice,
        orderStatus: 'PENDING',
        OrderItems: {
          create: cartItems.map((item) => ({
            vehicleId: item.vehicleId,
            quantity: item.quantity,
            price: item.vehicle.dailyPrice * item.quantity,
          })),
        },
      },
    });

    for (const item of cartItems) {
      await this.prisma.vehicle.update({
        where: { vehicleId: item.vehicleId },
        data: { rentalCount: { increment: item.quantity } },
      });
    }

    await this.prisma.cartItem.deleteMany({ where: { userId } });

    return order;
  }

  async getOrderItems(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        OrderItems: {
          include: { vehicle: true },
        },
      },
    });
  }
}
