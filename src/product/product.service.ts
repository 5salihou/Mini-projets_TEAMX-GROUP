import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddProductDto } from './dto/add-product.dto';
import { Product, ProductDocument } from './entity/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,) {}

  getProducts() {
    return this.ProductModel.find();
  }
  addProduct(newProduct: AddProductDto) {
    return this.ProductModel.create(newProduct);
  }
  getProductById(id: string) {
    throw this.ProductModel.findOne({ _id: id });
  }
  deleteProduct(id: string) {
    return this.ProductModel.deleteOne({ _id: id });
  }
  editeProduct(id: string, newProduct: AddProductDto) {
    return this.ProductModel.findByIdAndUpdate(
      { _id: id },
      { $set: newProduct },
      { new: true },
    );
  }
}
