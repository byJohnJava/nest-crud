/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
  }

  @Get()
  async findAll() {
    return { users: [] };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() { name, email, password }: UpdatePutUserDTO,
  ) {
    return { id, name, email, password, method: 'PUT' };
  }

  @Patch(':id')
  async updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() { name, email, password }: UpdatePatchUserDTO,
  ) {
    return { id, name, email, password, method: 'PATCH' };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
