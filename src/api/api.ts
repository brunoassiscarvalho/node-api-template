import { FastifyInstance } from 'fastify';

import InfoApi from './info/info.api';

export default function routes(app: FastifyInstance): void {
  app.register(InfoApi);
}
