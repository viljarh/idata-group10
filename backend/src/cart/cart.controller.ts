import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { CartService } from './cart.service';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(
    @GetUser('userId') userId: number,
    @Body() { vehicleId, quantity }: { vehicleId: number; quantity: number },
  ) {
    return this.cartService.addToCart(userId, vehicleId, quantity);
  }

  @Get()
  getCartItems(@GetUser('userId') userId: number) {
    return this.cartService.getCartItems(userId);
  }

  @Delete('remove/:vehicleId')
  removeCartItem(
    @GetUser('userId') userId: number,
    @Param('vehicleId') vehicleId: number,
  ) {
    return this.cartService.removeCartItem(userId, vehicleId);
  }

  @Delete('clear')
  clearCart(@GetUser('userId') userId: number) {
    return this.cartService.clearCart(userId);
  }
}
