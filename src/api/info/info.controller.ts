import { Express } from 'express';
import BusinessException from '../../exceptions/BusinessException';

const InfoController = (app: Express) => {
  const getInfos = async (): Promise<string> => {
    return 'Servidor Funcionado!';
  };

  const getInfosErro = async (): Promise<string> => {
    throw new BusinessException("Testes de erro da aplicação");    
  };

  return { getInfos, getInfosErro };
};

export default InfoController;
