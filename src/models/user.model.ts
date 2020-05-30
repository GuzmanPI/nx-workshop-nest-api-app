import { Document } from 'mongoose';
import { Address } from './address.model';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly avatar: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly address: Address;
  readonly position: string;
  readonly salesHistory: { mine: number[]; team: number[] };
}
