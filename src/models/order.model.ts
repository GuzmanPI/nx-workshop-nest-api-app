import { Document } from 'mongoose';

export interface Order extends Document {
  readonly amount: number;
  readonly date: Date;
  readonly type: string;
  readonly account: number;
  readonly accountName: string;
  readonly transactionType: string;
  readonly clientId: string;
  readonly products: string[];
}
