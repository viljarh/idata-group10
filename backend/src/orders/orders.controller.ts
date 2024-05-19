import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { OrdersService } from './orders.service';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  createOrder(@GetUser('userId') userId: number) {
    return this.ordersService.createOrder(userId);
  }

  @Get()
  getOrderItems(@GetUser('userId') userId: number) {
    return this.ordersService.getOrderItems(userId);
  }
}
