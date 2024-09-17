import { DataSource } from 'typeorm';
import { Producto } from '../models/Producto';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "practico1-db",
    entities: [Producto],
    synchronize: true,
    logging: true,
});