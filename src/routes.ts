import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { AgendaController } from "./controllers/AgendaController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async (request: FastifyRequest, repply: FastifyReply) => {
        return { ok: true }
    })

    fastify.get("/agenda", async (request: FastifyRequest, repply: FastifyReply) => {
        return new AgendaController().handle(request, repply);
    })
}