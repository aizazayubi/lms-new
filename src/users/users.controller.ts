import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.usersService.remove(Number(id));
    if (!deleted) return { message: `User ${id} not found` };
    return { message: `User ${id} deleted`, user: deleted };
  }
}
