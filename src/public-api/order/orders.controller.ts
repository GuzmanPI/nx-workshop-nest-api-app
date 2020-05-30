import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  PipeTransform,
  Post,
  Query,
  Res,
  UsePipes,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Response } from 'express';
import { ApiResponse } from '../../classes/api-response.class';
import { Order } from '../../models/order.model';
import { OrderPipe } from '../../pipes/order.pipe';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UsePipes(new OrderPipe())
  async create(@Body() order: Order, @Res() res: Response) {
    const orders = await this.ordersService.createOrder(order);
    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, orders));
  }

  @Get()
  async findAll(@Query() params, @Res() res: Response) {
    const orders = await this.ordersService.findAllByClientId(params.clientId);
    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, orders));
  }
}
