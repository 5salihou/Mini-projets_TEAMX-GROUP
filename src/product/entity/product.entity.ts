import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: false })
  id: string;
  @Prop({ required: false })
  name: string;
  @Prop({ required: false })
  price: string;
  @Prop({ required: false })
  quantity: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
