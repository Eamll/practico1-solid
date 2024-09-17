import { Repository } from 'typeorm';
import { IProductoRepository } from '../../interfaces/repositories/IProducto.repository.interface';
import { Producto } from '../../models/Producto';
import { CreateProductoInput } from '../../entities/inputs/create-producto.input';
import { AppDataSource } from '../../config/database';


export class ProductoTypeOrmRepository implements IProductoRepository {
    private repository: Repository<Producto>;

    constructor() {
        this.repository = AppDataSource.getRepository(Producto);
    }

    async create(input: CreateProductoInput): Promise<Producto> {
        const producto = this.repository.create(input);
        return await this.repository.save(producto);
    }

    async readAll(): Promise<Producto[]> {
        try {
            const productos = await this.repository.find();
            console.log(`Successfully fetched ${productos.length} products`);
            return productos;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw new Error('Failed to fetch products');
        }
    }

    async readOne(id: string): Promise<Producto | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async update(id: string, input: Partial<Producto>): Promise<Producto | null> {
        const producto = await this.repository.findOne({ where: { id } });
        if (!producto) {
            return null;
        }
        this.repository.merge(producto, input);
        return await this.repository.save(producto);
    }

    async delete(id: string): Promise<boolean> {
        const producto = await this.repository.findOne({ where: { id } });
        if (!producto) {
            return false;
        }
        await this.repository.remove(producto);
        return true;
    }
}