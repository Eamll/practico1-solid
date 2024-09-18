import { Producto } from '../models/Producto';
import { CreateProductoInput } from '../entities/inputs/create-producto.input';
import { IProductoRepository } from '../interfaces/repositories/IProducto.repository.interface';

export class ProductoService {
    constructor(private productoRepository: IProductoRepository) { }

    async create(input: CreateProductoInput): Promise<Producto> {
        return await this.productoRepository.create(input);
    }

    async readAll(): Promise<Producto[]> {
        return await this.productoRepository.readAll();
    }

    async readOne(id: string): Promise<Producto | null> {
        return await this.productoRepository.readOne(id);
    }

    async update(id: string, input: Partial<Producto>): Promise<Producto | null> {
        return await this.productoRepository.update(id, input);
    }

    async delete(id: string): Promise<boolean> {
        return await this.productoRepository.delete(id);
    }
}