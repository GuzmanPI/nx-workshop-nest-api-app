import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ProductsService } from './products.service';
import { Product } from '../../models/product.model';
import { ApiResponse } from '../../classes/api-response.class';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(@Query() params, @Res() res: Response) {
    const products: Product[] = await this.productsService.findAllByPage(
      Number(params.page),
    );

    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, products));
  }

  @Get(':id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    const user = await this.productsService.findById(id);
    res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK, user));
  }
}
