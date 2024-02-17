import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { PaginatedUserDto } from './dto/paginated-user.dto';
import { AddUserDto } from './dto/add-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // afficher tous les utilisateurs
  @Get()
  getUsers(@Query() mesQueryParams: PaginatedUserDto): User[] {
    return this.userService.getUsers();
  }
  // afficher un utilisateurs
  @Get(':id')
  getUserById(@Param('id') id) {
    return this.userService.getUserById(+id);
  }
  // ajouter un utilisateurs
  @Post()
  addUser(@Body() newUser: AddUserDto): User {
    return this.userService.addUser(newUser);
  }
  // supprimer un utilisateurs
  @Delete(':id')
  deleteUser(@Param('id') id) {
    return this.userService.deleteUser(+id);
  }
  // modifier un utilisateurs
  @Put(':id')
  editUser(@Param('id') id, @Body() newUser: Partial<AddUserDto>) {
    return this.userService.editeUser(+id, newUser);
  }
}
