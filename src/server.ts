import Fastify, { FastifyInstance } from 'fastify';
import Api from './api/api';


const server: FastifyInstance = Fastify({});

Api(server);

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const addressText = typeof address === 'string' ? address : address?.address;
    console.log(`Server listening at ${addressText}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
