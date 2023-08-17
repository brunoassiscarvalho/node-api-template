import { Document, Schema, model, Model } from 'mongoose';

export interface ITrek extends Document {
  title: string;
  description: string;
  edges: any[];
  nodes: any[];
  viewport: any;
  createdAt: Date;
}

export const TrekSchema = new Schema<ITrek, Model<ITrek>, ITrek>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  edges: { type: Schema.Types.Mixed, required: true },
  nodes: { type: Schema.Types.Mixed, required: true },
  viewport: { type: Schema.Types.Mixed, required: true },
  createdAt: { type: Date, default: new Date() },
});

const Trek = model<ITrek>('Trek', TrekSchema);
Trek.ensureIndexes();
Trek.syncIndexes();
export default Trek;
