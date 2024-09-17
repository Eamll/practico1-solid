import { Producto } from "../../models/Producto";
import { CreateProductoInput } from "../../entities/inputs/create-producto.input";


export interface IProductoRepository {
    create(input: CreateProductoInput): Promise<Producto>;
    readAll(): Promise<Producto[]>;
    readOne(id: string): Promise<Producto | null>;
    update(id: string, input: Partial<Producto>): Promise<Producto | null>;
    delete(id: string): Promise<boolean>;
}