import { Express } from 'express';
import { ProductoTypeOrmRepository } from '../repositories/typeorm/Producto.typeorm.repository';
import { ProductoController } from '../controllers/ProductoController';
import { FabricanteTypeOrmRepository } from '../repositories/typeorm/Fabricante.typeorm.repository';


export const setupProductoRoutes = (app: Express) => {
    const productoRepository = new ProductoTypeOrmRepository();
    const fabricanteRepository = new FabricanteTypeOrmRepository();
    const productoController = new ProductoController(productoRepository, fabricanteRepository);

    app.get('/productos', (req, res) => productoController.index(req, res));
    app.get('/productos/registrar', (req, res) => productoController.create(req, res));
    app.post('/productos/registrar', (req, res) => productoController.store(req, res));
};