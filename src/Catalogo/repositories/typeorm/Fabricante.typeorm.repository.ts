import { Repository } from 'typeorm';
import { Fabricante } from '../../entities/Fabricante';
import { AppDataSource } from '../../config/database';
import { CreateFabricanteInput } from '../../entities/inputs/fabricante/create-fabricante.input';
import { IFabricanteRepository } from '../IFabricanteRepository';

export class FabricanteTypeOrmRepository implements IFabricanteRepository {
    private repository: Repository<Fabricante>;

    constructor() {
        this.repository = AppDataSource.getRepository(Fabricante);
    }

    async registrar(data: CreateFabricanteInput): Promise<Fabricante> {
        const producto = this.repository.create(data);
        return await this.repository.save(producto);
    }

    async listar(): Promise<Fabricante[]> {
        const fabricantes = await this.repository.find();
        return fabricantes
    }
}