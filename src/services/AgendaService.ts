import { prisma } from '../lib/prismaClient';
import { serializeBigInt } from '../utils/serialize';

class AgendaService {
    async execute(){
        const listaAgenda = await prisma.agenda.findMany()
        const serialized = serializeBigInt(listaAgenda)

        return serialized
    }

    async exists(documento: string) {
        console.log(documento);
        const found = await prisma.agenda.findFirst({ where: { documento } });
        console.log(found);
        return !!found;
    }

    async create(data: CreateAgendaDto) {
        const created = await prisma.agenda.create({
            data: {
            documento: data.documento,
            nome: data.nome,
            },
        });

        return serializeBigInt(created);
    }

    async deleteByDocumento(documento: string): Promise<boolean> {
        const existing = await prisma.agenda.findFirst({ where: { documento } });
      
        if (!existing) return false;
      
        await prisma.agenda.delete({
          where: { id: existing.id },
        });
      
        return true;
    }
}

export { AgendaService }