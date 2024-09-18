import { Repository } from 'typeorm';
import { Producto } from '../../entities/Producto';
import { AppDataSource } from '../../config/database';
import { CreateProductoInput } from '../../entities/inputs/producto/create-producto.input';
import { IProductoRepository } from '../IPoductoRepository';


export class ProductoTypeOrmRepository implements IProductoRepository {
    private repository: Repository<Producto>;

    constructor() {
        this.repository = AppDataSource.getRepository(Producto);
    }

    async registrar(data: CreateProductoInput): Promise<Producto> {
        const producto = this.repository.create(data);
        return await this.repository.save(producto);
    }

    async listar(): Promise<Producto[]> {
        const productos = await this.repository.find();
        return productos
    }
}