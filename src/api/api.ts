import { FastifyInstance } from 'fastify';
import metricsPlugin from 'fastify-metrics';

import InfoApi from './info/info.api';

export default async function  routes(app: FastifyInstance): Promise<void> {
  await app.register(metricsPlugin, {endpoint: '/metrics'});
  app.register(InfoApi);  
}
