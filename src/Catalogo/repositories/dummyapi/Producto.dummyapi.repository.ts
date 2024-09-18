import { Producto } from '../../entities/Producto';
import { CreateProductoInput } from '../../entities/inputs/producto/create-producto.input';
import { IRepository } from '../IRepository';

export class ProductoDummyApiRepository implements IRepository<Producto> {
    async registrar(data: CreateProductoInput): Promise<Producto> {
        throw new Error('Method not implemented.');
    }

    async listar(): Promise<Producto[]> {
        throw new Error('Method not implemented.');
    }
}
