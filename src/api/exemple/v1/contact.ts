import { Document, Schema, model, Model } from 'mongoose';
import { IContact } from '@mern-monorepo/monorepo-interface';

export interface SchemaContact extends IContact, Document {}

const ContactSchema = new Schema<SchemaContact, Model<SchemaContact>, SchemaContact>({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  birthContry: { type: String, required: true },
});

const Contact = model<SchemaContact>('Contact', ContactSchema);
Contact.ensureIndexes();
Contact.syncIndexes();
export default Contact;
