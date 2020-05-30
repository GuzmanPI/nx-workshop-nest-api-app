import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

import * as faker from 'faker';
import { Order } from '../models/order.model';

@Injectable()
export class OrderPipe implements PipeTransform<Partial<Order>, Order> {
  transform(value: Partial<Order>, metadata: ArgumentMetadata): Order {
    return {
      amount: faker.finance.amount() as number,
      date: new Date(),
      type: faker.finance.transactionType(),
      account: faker.finance.account(),
      accountName: faker.finance.accountName(),
      transactionType: faker.finance.transactionType(),
      clientId: value.clientId,
      products: value.products,
    } as Order;
  }
}
