import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  intitule: string;
  @IsNotEmpty()
  nom: string;
}
