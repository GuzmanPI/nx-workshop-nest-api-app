import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ClientsService } from './clients.service';
import { Client } from '../../models/client.model';
import { ApiResponse } from '../../classes/api-response.class';

@Controller('/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll(@Query() params, @Res() res: Response) {
    const clients: Client[] = await this.clientsService.findAllWithLimit(
      Number(params.limit),
    );

    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, clients));
  }
}
