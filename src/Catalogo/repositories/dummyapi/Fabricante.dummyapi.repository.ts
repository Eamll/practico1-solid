import { Fabricante } from '../../entities/Fabricante';
import { CreateFabricanteInput } from '../../entities/inputs/fabricante/create-fabricante.input';
import { IRepository } from '../IRepository';

export class FabricanteDummyApiRepository implements IRepository<Fabricante> {
    async registrar(data: CreateFabricanteInput): Promise<Fabricante> {
        throw new Error('Method not implemented.');
    }

    async listar(): Promise<Fabricante[]> {
        throw new Error('Method not implemented.');
    }
}
