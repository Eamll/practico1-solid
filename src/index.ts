import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { AppDataSource } from './db/AppDataSource';
import path from 'path';
import { ProductoController } from './Catalogo/controllers/producto.controller';
import { ProductoService } from './Catalogo/services/producto.service';
import { ProductoTypeOrmRepository } from './Catalogo/entities/repositories/typeorm/Producto.typeorm.repository';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

// Routes
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

const productoRepository = new ProductoTypeOrmRepository();
const productoService = new ProductoService(productoRepository);
const productoController = new ProductoController(productoService);

// CRUD endpoints for Producto
// CRUD endpoints for Producto
app.post('/productos', (req, res) => productoController.create(req, res));
app.get('/productos', (req, res) => productoController.readAll(req, res));
app.get('/productos/:id', (req, res) => productoController.readOne(req, res));
app.put('/productos/:id', (req, res) => productoController.update(req, res));
app.delete('/productos/:id', (req, res) => productoController.delete(req, res));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;