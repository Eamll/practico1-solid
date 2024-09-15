// data-source.ts

import { DataSource } from 'typeorm';
import { Producto } from '../Catalogo/models/Producto';



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "practico1-db",
    entities: [Producto],
    synchronize: true,
    logging: true
});