import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { routes } from "./routes";

const app = Fastify({ 
    logger: true,
    serializerOpts: {
      bigint: 'string'
    } 
});

const start = async () => {
    await app.register(cors);

    await app.register(swagger, {
        swagger: {
          info: {
            title: 'API Agenda',
            description: 'Documentação da API com Swagger',
            version: '1.0.0',
          },
          tags: [{ name: 'Agenda' }],
        },
    });
      
    await app.register(swaggerUi, {
        routePrefix: '/docs'
    });
    
    await app.register(routes);

    try {
        app.listen({ port: 3333 }, (err, address) => {
            if (err) {
              console.error(err);
              process.exit(1);
            }
            console.log(`Servidor rodando em ${address}`);
        });
    } catch (error) {
        process.exit(1);
    }
}

start();