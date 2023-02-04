/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async findAll() {
    return { users: [] };
  }

  @Get(':id')
  async findOne(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(@Param() params, @Body() body) {
    return { params, body, method: 'PUT' };
  }

  @Patch(':id')
  async updatePartial(@Param() params, @Body() body) {
    return { params, body, method: 'PATCH' };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return { params };
  }
}
