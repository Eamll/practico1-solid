// src/Catalogo/services/producto.service.ts

import { Repository } from 'typeorm';
import { Producto } from '../models/Producto';
import { CreateProductoInput } from '../entities/inputs/create-producto.input';
import { AppDataSource } from '../../db/AppDataSource';

export class ProductoService {
    private productoRepository: Repository<Producto>;

    constructor() {
        this.productoRepository = AppDataSource.getRepository(Producto);
    }

    async create(input: CreateProductoInput): Promise<Producto> {
        const producto = this.productoRepository.create(input);
        return await this.productoRepository.save(producto);
    }

    async readAll(): Promise<Producto[]> {
        return await this.productoRepository.find();
    }

    async readOne(id: string): Promise<Producto | null> {
        return await this.productoRepository.findOne({ where: { id } });
    }

    async update(id: string, input: Partial<Producto>): Promise<Producto | null> {
        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) {
            return null;
        }
        this.productoRepository.merge(producto, input);
        return await this.productoRepository.save(producto);
    }

    async delete(id: string): Promise<boolean> {
        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) {
            return false;
        }
        await this.productoRepository.remove(producto);
        return true;
    }
}

export default new ProductoService();