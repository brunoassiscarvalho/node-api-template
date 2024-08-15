import { Document, Schema, model, Model } from 'mongoose';
import {IExemple} from '@mern-monorepo/monorepo-interface';

export interface SchemaExemple extends IExemple, Document{}

const ExempleSchema = new Schema<SchemaExemple, Model<SchemaExemple>, SchemaExemple>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  
});

const Exemple = model<SchemaExemple>('Exemple', ExempleSchema);
Exemple.ensureIndexes();
Exemple.syncIndexes();
export default Exemple;
