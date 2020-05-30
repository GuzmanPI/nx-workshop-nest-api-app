import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from '../../models/client.model';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async findAllWithLimit(limit: number): Promise<Client[]> {
    return this.clientModel
      .find()
      .limit(limit)
      .exec();
  }
}
