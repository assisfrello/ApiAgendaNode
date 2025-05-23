import { FastifyRequest, FastifyReply } from 'fastify';
import { AgendaService } from './../services/AgendaService'
import { logErrorToElastic } from '../lib/logger';

class AgendaController{
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const agendaService = new AgendaService();

        const agenda = await agendaService.execute();
        
        reply.send(agenda);
    }

    async create(request: FastifyRequest, reply: FastifyReply) {
        const { documento, nome } = request.body as { documento: string; nome: string };
    
        const agendaService = new AgendaService();

        try {
          const exists = await agendaService.exists(documento);
          if (exists) {
            return reply.status(409).send({ error: 'CPF já cadastrado' });
          }
      
          const created = await agendaService.create({ documento, nome });
          return reply.status(201).send(created);
        } catch (error: any) {
          await logErrorToElastic({
            message: 'Erro ao incluir registro',
            context: { documento },
            stack: error.stack,
          });
      
          return reply.status(500).send({ error: "Erro interno no servidor" });
        }
    }

    async delete(request: FastifyRequest, reply: FastifyReply) {
        const { documento } = request.params as { documento: string };
        const agendaService = new AgendaService();

        try {
          const deleted = await agendaService.deleteByDocumento(documento);
        
          if (!deleted) {
            return reply.status(404).send({ error: "Registro não encontrado" });
          }
        
          return reply.status(200).send({ message: "Registro excluído com sucesso" }); 
        } catch (error: any) {
          await logErrorToElastic({
            message: 'Erro ao excluir registro',
            context: { documento },
            stack: error.stack,
          });
      
          return reply.status(500).send({ error: "Erro interno no servidor" });
        }
    }
}

export { AgendaController }