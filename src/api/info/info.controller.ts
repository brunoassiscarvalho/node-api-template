import { Express } from 'express';

const InfoController = (app: Express) => {
  const getInfos = async (): Promise<string> => {
    return 'Servidor Funcionado!';
  };
  return { getInfos };
};

export default InfoController;
