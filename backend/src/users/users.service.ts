import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user'
    return this.prisma.customer.create({ data: createUserDto });

  }

  findAll() {
    //return `This action returns all users`;
    return this.prisma.customer.findMany({ where: { customerId: { gt: 0 } } });
  }

  findOne(id: number) {
    //return `This action returns a #${id} user`;
    return this.prisma.customer.findUnique({ where: { customerId: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
    return this.prisma.customer.update({
      where: { customerId: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    //return `This action removes a #${id} user`;
    return this.prisma.customer.delete({ where: { customerId: id } });
  }
}
