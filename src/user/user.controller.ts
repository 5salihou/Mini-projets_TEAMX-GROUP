import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddUserDto } from './dto/add-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // afficher tous les utilisateurs
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  // afficher un utilisateurs
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  // ajouter un utilisateurs
  @Post()
  addUser(@Body() newUser: AddUserDto) {
    return this.userService.addUser(newUser);
  }
  // supprimer un utilisateurs
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  // modifier un utilisateurs
  @Put(':id')
  editUser(@Param('id') id: string, @Body() newUser: AddUserDto) {
    return this.userService.editeUser(id, newUser);
  }
}
