import { Document } from 'mongoose';

export interface Product extends Document {
  readonly amiiboSeries: string;
  readonly character: string;
  readonly gameSeries: string;
  readonly head: string;
  readonly image: string;
  readonly name: string;
  readonly release: { au: string; eu: string; jp: string; na: string };
  readonly tail: string;
  readonly type: string;
}
