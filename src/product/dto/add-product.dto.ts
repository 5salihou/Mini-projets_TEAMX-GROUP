import { IsNotEmpty } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  price: string;
  @IsNotEmpty()
  quantity: number;
}
