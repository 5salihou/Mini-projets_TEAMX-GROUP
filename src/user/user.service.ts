import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDocument } from './entity/user.entity';
import { AddUserDto } from './dto/add-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  // async create(createAddUserDto: AddUserDto): Promise<User> {
  //   const createdUser = new this.UserModel(createAddUserDto);
  //   return createdUser.save();
  // }

  // async findAll(): Promise<User[]> {
  //   return this.UserModel.find().exec();
  // }

  users: User[] = [];
  getUsers(): User[] {
    return this.users;
  }
  addUser(newUser: AddUserDto) {
    return this.UserModel.create(newUser);
  }
  getUserById(id: number): User {
    const user = this.users.find((actualUser: User) => actualUser.id === id);
    if (user) return user;
    throw new NotFoundException(`le user d'id ${id} n'existe pas`);
  }
  deleteUser(id: number) {
    const index = this.users.findIndex(
      (actualUser: User) => actualUser.id === +id,
    );
    if (index >= 0) {
      this.users.splice(index, 1);
    } else {
      throw new NotFoundException(`le user d'id ${id} n'existe pas`);
    }
  }
  editeUser(id: number, newUser: Partial<User>) {
    const user = this.getUserById(id);
    user.intitule = newUser.intitule ? newUser.intitule : user.intitule;
    user.nom = newUser.nom ? newUser.nom : user.nom;
    return user;
  }
}
