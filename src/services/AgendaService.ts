import { prisma } from '../lib/prismaClient';
import { serializeBigInt } from '../utils/serialize';

class AgendaService {
    async execute(){

        const listaAgenda = await prisma.agenda.findMany()
        const serialized = serializeBigInt(listaAgenda)

        return serialized
    }
}

export { AgendaService }