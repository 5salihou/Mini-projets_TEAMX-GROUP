import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddProductDto } from './dto/add-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  // afficher tous les utilisateurs
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }
  // afficher un utilisateurs
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
  // ajouter un utilisateurs
  @Post()
  addProduct(@Body() newProduct: AddProductDto) {
    return this.productService.addProduct(newProduct);
  }
  // supprimer un utilisateurs
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
  // modifier un utilisateurs
  @Put(':id')
  editProduct(@Param('id') id: string, @Body() newProduct: AddProductDto) {
    return this.productService.editeProduct(id, newProduct);
  }
}
