import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { AppDataSource } from './db/AppDataSource';
import path from 'path';
import { ProductoController } from './Catalogo/controllers/producto.controller';
import { ProductoService } from './Catalogo/services/producto.service';

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

const productoService = new ProductoService();
const productoController = new ProductoController(productoService);

// CRUD endpoints for Producto
app.post('/productos', productoController.create);
app.get('/productos', productoController.readAll);
app.get('/productos/:id', productoController.readOne);
app.put('/productos/:id', productoController.update);
app.delete('/productos/:id', productoController.delete);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;