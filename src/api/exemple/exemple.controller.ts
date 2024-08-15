import { Express, Request } from 'express';
import Exemple, { SchemaExemple } from './exemple';
import { logger } from '../../logger/winston';

const ExempleController = () => {
  const getExemples = async (): Promise<SchemaExemple[]> => {
    const exemples: SchemaExemple[] = await Exemple.find();
    return exemples;
  };

  const getExempleById = async (req: Request): Promise<SchemaExemple | null> => {
    const _id: any = req.params.id as any;
    logger.info(`getExempleById${_id}`);
    const exemples: SchemaExemple | null = await Exemple.findOne({ _id });
    return exemples;
  };

  const createExemples = async (req: Request): Promise<SchemaExemple> => {
    const exemple: SchemaExemple = await Exemple.create(req.body);
    return exemple;
  };

  const updateExemples = async (req: Request): Promise<SchemaExemple> => {
    logger.info(`update${req.body._id}`);
    const exemple: SchemaExemple = await Exemple.updateOne({ _id: req.body._id }, req.body).lean();
    return exemple;
  };

  return { getExemples, createExemples, updateExemples, getExempleById };
};

export default ExempleController;
