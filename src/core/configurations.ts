import dotenv from 'dotenv';
dotenv.config();
const configurations = {
  APP: {
    name: process.env.APP_NAME || 'Defina um nome para a aplicação',
    logoUrl: process.env.APP_LOGO_URL || '',
    port: process.env.PORT || '3005',
    clients: process.env.CLIENTS,
  },
  EMAIL: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  MONGO: process.env.MONGO_DB_URI || '',
};

export default configurations;
export type Configurations = typeof configurations;
