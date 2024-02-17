import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { AddUserDto } from './dto/add-user.dto';

@Injectable()
export class UserService {
  users: User[] = [];
  getUsers(): User[] {
    return this.users;
  }
  addUser(newUser: AddUserDto): User {
    let id;
    const { intitule, nom } = newUser;
    if (this.users.length) {
      id = this.users[this.users.length - 1].id + 1;
    } else {
      id = 1;
    }
    const user = {
      id,
      intitule,
      nom,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
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
