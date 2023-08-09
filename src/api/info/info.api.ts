import { RouteShorthandOptions, FastifyPluginAsync } from 'fastify';
import { getInfos } from './info.controller';

const routes: FastifyPluginAsync = async (server) => {
  const defaultPath = '/info';
  const opts: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            pong: {
              type: 'string',
            },
          },
        },
      },
    },
  };

  server.get(defaultPath, opts, async function () {
    return getInfos();
  });
};

export default routes;
