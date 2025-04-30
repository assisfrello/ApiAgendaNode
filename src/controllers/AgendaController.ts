import { FastifyRequest, FastifyReply } from 'fastify';
import { AgendaService } from './../services/AgendaService'

class AgendaController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const agendaService = new AgendaService();

        const agenda = await agendaService.execute();
        
        reply.send(agenda);
    }
}

export { AgendaController }