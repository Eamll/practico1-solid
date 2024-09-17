import 'reflect-metadata';
import dotenv from 'dotenv';

import { AppDataSource } from './Catalogo/config/database';
import { startServer } from './Catalogo/config/server';


dotenv.config();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        startServer();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });