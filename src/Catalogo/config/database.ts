import { DataSource } from 'typeorm';
import { Fabricante } from '../entities/Fabricante';
import { Producto } from '../entities/Producto';
import { GrupoProducto } from '../entities/GrupoProducto';
import { Proveedor } from '../entities/Proveedor';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "practico1-db",
    entities: [Fabricante, GrupoProducto, Proveedor, Producto],
    synchronize: true,
    logging: true,
});