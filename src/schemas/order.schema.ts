import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    amount: Number,
    date: Date,
    type: String,
    account: Number,
    accountName: String,
    transactionType: String,
    clientId: Types.ObjectId,
    products: Array,
  },
  { collection: 'order' },
);
