import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './entity/user.entity';
import { AddUserDto } from './dto/add-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  getUsers() {
    return this.UserModel.find();
  }
  addUser(newUser: AddUserDto) {
    return this.UserModel.create(newUser);
  }
  getUserById(id: string) {
    throw this.UserModel.findOne({ _id: id });
  }
  deleteUser(id: string) {
    return this.UserModel.deleteOne({ _id: id });
  }
  editeUser(id: string, newUser: AddUserDto) {
    return this.UserModel.findByIdAndUpdate(
      { _id: id },
      { $set: newUser },
      { new: true },
    );
  }
}
