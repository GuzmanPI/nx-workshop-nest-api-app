import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import './utils/env';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { UserSchema } from './schemas/user.schema';
import { ProductSchema } from './schemas/product.schema';
import { OrderSchema } from './schemas/order.schema';
import { ClientSchema } from './schemas/client.schema';
import { UsersController } from './public-api/user/users.controller';
import { OrdersController } from './public-api/order/orders.controller';
import { ProductsController } from './public-api/product/products.controller';
import { ClientsController } from './public-api/client/clients.controller';
import { UsersService } from './public-api/user/users.service';
import { OrdersService } from './public-api/order/orders.service';
import { ProductsService } from './public-api/product/products.service';
import { ClientsService } from './public-api/client/clients.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://angular-bogota:7nY43uEJKexFZNqV@angular-mastery-zpsoe.gcp.mongodb.net/nx-workshop?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Client', schema: ClientSchema },
      { name: 'Product', schema: ProductSchema },
      { name: 'order', schema: OrderSchema },
    ]),
  ],
  controllers: [
    UsersController,
    ClientsController,
    ProductsController,
    OrdersController,
  ],
  providers: [
    UsersService,
    ClientsService,
    ClientsService,
    ProductsService,
    OrdersService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
