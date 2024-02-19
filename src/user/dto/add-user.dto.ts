import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  address: string;
}
