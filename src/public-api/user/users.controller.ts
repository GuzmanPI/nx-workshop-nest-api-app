import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { UsersService } from './users.service';
import { User } from '../../models/user.model';
import { ApiResponse } from '../../classes/api-response.class';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() params, @Res() res: Response) {
    const users: User[] = await this.usersService.findAllWithLimit(
      Number(params.limit),
    );

    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, users));
  }
}
