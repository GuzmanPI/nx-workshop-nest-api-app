import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from '../../models/order.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('order')
    private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    await newOrder.save();
    return newOrder.toObject({ versionKey: false });
  }

  async findAllByClientId(id: string): Promise<Order[]> {
    return this.orderModel.find({ clientId: id }).exec();
  }
}
