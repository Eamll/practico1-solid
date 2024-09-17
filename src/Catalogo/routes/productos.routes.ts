import { Express } from 'express';
import { ProductoTypeOrmRepository } from '../repositories/typeorm/Producto.typeorm.repository';
import { ProductoService } from '../services/producto.service';
import { ProductoController } from '../controllers/producto.controller';


export const setupProductoRoutes = (app: Express) => {
    const productoRepository = new ProductoTypeOrmRepository();
    const productoService = new ProductoService(productoRepository);
    const productoController = new ProductoController(productoService);

    app.post('/productos', (req, res) => productoController.create(req, res));
    app.get('/productos', (req, res) => productoController.readAll(req, res));
    app.get('/productos/:id', (req, res) => productoController.readOne(req, res));
    app.put('/productos/:id', (req, res) => productoController.update(req, res));
    app.delete('/productos/:id', (req, res) => productoController.delete(req, res));
};