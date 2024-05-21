import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { CartService } from './cart.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('cart')
@ApiTags('cart')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  @ApiOperation({ summary: 'Add a vehicle to the cart' })
  @ApiResponse({
    status: 201,
    description: 'Vehicle added to cart successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async addToCart(
    @Body() addToCartDto: { vehicleId: number; quantity: number },
    @GetUser('userId') userId: number,
  ) {
    return this.cartService.addToCart({
      userId,
      vehicleId: addToCartDto.vehicleId,
      quantity: addToCartDto.quantity,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Get items in the cart' })
  @ApiResponse({ status: 200, description: 'Returns all cart items.' })
  getCartItems(@GetUser('userId') userId: number) {
    return this.cartService.getCartItems(userId);
  }

  @Delete('remove/:cartItemId')
  @ApiOperation({ summary: 'Remove an item from the cart' })
  @ApiResponse({
    status: 200,
    description: 'Item removed from cart successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  removeCartItem(@Param('cartItemId', ParseIntPipe) cartItemId: number) {
    return this.cartService.removeCartItem(cartItemId);
  }

  @Delete('clear')
  @ApiOperation({ summary: 'Clear the cart' })
  @ApiResponse({ status: 200, description: 'Cart cleared successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  clearCart(@GetUser('userId') userId: number) {
    return this.cartService.clearCart(userId);
  }
}
