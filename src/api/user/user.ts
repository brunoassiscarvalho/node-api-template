import { Document, Schema, model, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  phone: string;
  cep: string;
  status: number;
  createdAt: Date;
}

export const UserSchema = new Schema<IUser, Model<IUser>, IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  cep: { type: String, required: true },
  image: { type: String },
  status: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

const User = model<IUser>("User", UserSchema);
User.ensureIndexes();
User.syncIndexes();
export default User;
