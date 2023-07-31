import Fastify, { FastifyInstance } from 'fastify';
import api from './api/api';


const server: FastifyInstance = Fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
    customLevels: {
      foo: 35,
      bar: 45,
    },
  },
});
const port = 3010;



server.get('/', async () => {
  return { hello: 'world 2 gfdgsg' };
});

const start = async () => {
  await api(server);
  server.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address} : ${port}`);
  });
};
start();
