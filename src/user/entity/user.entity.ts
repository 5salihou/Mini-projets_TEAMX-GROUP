import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: false })
  id: string;
  @Prop({ required: false })
  firstname: string;
  @Prop({ required: false })
  lastname: string;
  @Prop({ required: false })
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
