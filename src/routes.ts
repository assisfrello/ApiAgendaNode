import { FastifyInstance } from "fastify";
import { AgendaController } from "./controllers/AgendaController";

const controller = new AgendaController();

export async function routes(app: FastifyInstance) {
  app.get('/agenda', {
    schema: {
      summary: 'Listar agenda',
      tags: ['Agenda'],
      response: {
        200: {
          description: 'Lista de registros',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              documento: { type: 'string' },
              nome: { type: 'string' },
            },
          },
        },
      },
    },
    handler: controller.handle,
  });

  app.post('/agenda', {
    schema: {
      summary: 'Criar novo registro',
      tags: ['Agenda'],
      body: {
        type: 'object',
        properties: {
          documento: { type: 'string' },
          nome: { type: 'string' },
        },
        required: ['documento', 'nome'],
      },
      response: {
        201: {
          description: 'Registro criado',
          type: 'object',
          properties: {
            id: { type: 'string' },
            documento: { type: 'string' },
            nome: { type: 'string' },
          },
        },
        409: {
          description: 'CPF já cadastrado',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
        500: {
          description: 'Erro interno',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: controller.create,
  });

  app.delete('/agenda/:documento', {
    schema: {
      summary: 'Excluir registro da agenda',
      tags: ['Agenda'],
      params: {
        type: 'object',
        properties: {
          documento: { type: 'string' },
        },
        required: ['documento'],
      },
      response: {
        200: {
          description: 'Excluído com sucesso',
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
        404: {
          description: 'Não encontrado',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
        500: {
          description: 'Erro interno',
          type: 'object',
          properties: {
            error: { type: 'string' },
          },
        },
      },
    },
    handler: controller.delete,
  });
}