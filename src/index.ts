import Fastify, { FastifyInstance } from 'fastify';
import Api from './api/api';


const server: FastifyInstance = Fastify({});
const port = 3010;



server.get('/', async () => {
  return { hello: 'world 2' };
});


const start = async () => {
  await Api(server);
  server.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address} : ${port}`);
  });
};
start();
