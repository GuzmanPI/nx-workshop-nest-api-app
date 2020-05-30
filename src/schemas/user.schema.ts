import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    avatar: String,
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
    position: String,
    salesHistory: { mine: Array, team: Array },
  },
  { collection: 'user' },
);
