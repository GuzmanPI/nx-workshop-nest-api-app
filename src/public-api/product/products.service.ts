import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../../models/product.model';
import { PRODUCT_BATCH } from '../../constants/product.constant';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findAllByPage(page: number): Promise<Product[]> {
    console.log(page);
    return this.productModel
      .find()
      .skip(page * PRODUCT_BATCH)
      .limit(PRODUCT_BATCH)
      .exec();
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }
}
