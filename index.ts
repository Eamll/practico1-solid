import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Producto } from './models/Producto';
import { createProducto, getAllProductos, getProductoById, updateProducto, deleteProducto } from './controllers/producto.controller';
import { AppDataSource } from './db/AppDataSource';
import path from 'path';
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


// CRUD endpoints for Producto
app.post('/productos', createProducto);
app.get('/productos', getAllProductos);
app.get('/productos/:id', getProductoById);
app.put('/productos/:id', updateProducto);
app.delete('/productos/:id', deleteProducto);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;