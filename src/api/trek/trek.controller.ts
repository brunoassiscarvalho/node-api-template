import { Express, Request } from 'express';
import Trek, { ITrek } from './trek';
import { logger } from '../../logger/winston';

const TrekController = () => {
  const getTreks = async (): Promise<ITrek[]> => {
    const treks: ITrek[] = await Trek.find();
    return treks;
  };

  const getTrekById = async (req: Request): Promise<ITrek | null> => {
    const _id: any = req.params.id as any;
    logger.info(`getTrekById${_id}`);
    const treks: ITrek | null = await Trek.findOne({ _id });
    return treks;
  };

  const createTreks = async (req: Request): Promise<ITrek> => {
    const trek: ITrek = await Trek.create(req.body);
    return trek;
  };

  const updateTreks = async (req: Request): Promise<ITrek> => {
    logger.info(`update${req.body._id}`);
    const trek: ITrek = await Trek.replaceOne({ _id: req.body._id }, req.body).lean();
    return trek;
  };

  return { getTreks, createTreks, updateTreks, getTrekById };
};

export default TrekController;
