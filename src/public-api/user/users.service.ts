import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAllWithLimit(limit: number): Promise<User[]> {
    return this.userModel
      .find()
      .limit(limit)
      .exec();
  }
}
