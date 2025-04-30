import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { AgendaController } from "./controllers/AgendaController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/agenda", async (request: FastifyRequest, repply: FastifyReply) => {
        return new AgendaController().handle(request, repply);
    })

    fastify.post('/agenda', async (request, reply) => {
        return new AgendaController().create(request, reply);
    });

    fastify.delete("/agenda/:documento", async (request, reply) => {
        return new AgendaController().delete(request, reply);
    });
}