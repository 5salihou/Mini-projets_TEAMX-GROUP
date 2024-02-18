import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: false })
  id: string;
  @Prop({ required: false })
  intitule: string;
  @Prop({ required: false })
  nom: string;
  @Prop({ required: false })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
