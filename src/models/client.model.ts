import { Document } from 'mongoose';
import { Order } from './order.model';
import { Address } from './address.model';

export interface Client extends Document {
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly address: Address;
  readonly orders: Order[];
}
