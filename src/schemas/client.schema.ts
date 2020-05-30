import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const ClientSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    address: {
      zipCode: String,
      city: String,
      streetAddress: String,
      county: String,
      state: String,
      country: String,
      geo: { lat: Number, lng: Number },
    },
    orders: Array,
  },
  { collection: 'client' },
);
