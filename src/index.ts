import 'reflect-metadata';
import dotenv from 'dotenv';
import { AppDataSource } from './db/AppDataSource';
import { startServer } from './Catalogo/config/database';


dotenv.config();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        startServer();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });