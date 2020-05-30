import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    amiiboSeries: String,
    character: String,
    gameSeries: String,
    head: String,
    image: String,
    name: String,
    release: { au: String, eu: String, jp: String, na: String },
    tail: String,
    type: String,
  },
  { collection: 'product' },
);
