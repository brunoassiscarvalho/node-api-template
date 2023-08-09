import { FastifyInstance } from 'fastify';
import metricsPlugin from 'fastify-metrics';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

import InfoApi from './info/info.api';

export default async function api(app: FastifyInstance): Promise<void> {
  await app.register(swagger);
  await app.register(swaggerUi, {
    routePrefix: '/doc',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
  app.register(cors, { hook: 'preHandler' });
  app.register(helmet);
  await app.register(metricsPlugin, { endpoint: '/metrics' });
  app.register(InfoApi);
}
