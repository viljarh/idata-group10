import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { OrdersService } from './orders.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({ status: 201, description: 'Order created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  createOrder(@GetUser('userId') userId: number) {
    return this.ordersService.createOrder(userId);
  }
  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Returns all orders.' })
  async getOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get('user')
  @ApiOperation({ summary: 'Get orders for a specific user' })
  @ApiResponse({ status: 200, description: "Returns the user's orders." })
  getOrderItems(@GetUser('userId') userId: number) {
    return this.ordersService.getOrderItems(userId);
  }

  @Get('revenue/weekly')
  @ApiOperation({ summary: 'Get weekly revenue' })
  @ApiResponse({ status: 200, description: 'Returns the weekly revenue.' })
  async getWeeklyRevenue() {
    return this.ordersService.getWeeklyRevenue();
  }

  @Get('revenue/monthly')
  @ApiOperation({ summary: 'Get monthly revenue' })
  @ApiResponse({ status: 200, description: 'Returns the monthly revenue.' })
  async getMonthlyRevenue() {
    return this.ordersService.getMonthlyRevenue();
  }
}
