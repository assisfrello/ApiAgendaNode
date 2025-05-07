import { elasticClient } from './elasticsearch';

export async function logErrorToElastic(data: {
  message: string;
  context?: any;
  stack?: string;
}) {
  try {
    await elasticClient.index({
      index: 'app-errors',
      document: {
        message: data.message,
        context: data.context,
        stack: data.stack,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error('Falha ao enviar log para Elasticsearch:', err);
  }
}