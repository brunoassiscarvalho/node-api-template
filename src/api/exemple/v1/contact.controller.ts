import { Express, Request } from 'express';
import Contact, { SchemaContact } from './contact';
import { logger } from '../../../logger/winston';

const ContactController = () => {
  const getContacts = async (): Promise<SchemaContact[]> => {
    const contacts: SchemaContact[] = await Contact.find();
    return contacts;
  };

  const getContactById = async (req: Request): Promise<SchemaContact | null> => {
    const _id: any = req.params.id as any;
    logger.info(`getContactById${_id}`);
    const contacts: SchemaContact | null = await Contact.findOne({ _id });
    return contacts;
  };

  const createContacts = async (req: Request): Promise<SchemaContact> => {
    const contact: SchemaContact = await Contact.create(req.body);
    return contact;
  };

  const updateContacts = async (req: Request): Promise<SchemaContact> => {
    logger.info(`update${req.body._id}`);
    const contact: SchemaContact = await Contact.updateOne({ _id: req.body._id }, req.body).lean();
    return contact;
  };

  return { getContacts, createContacts, updateContacts, getContactById };
};

export default ContactController;
