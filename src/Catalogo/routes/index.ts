import { Express } from 'express';
import path from 'path';
import { setupProductoRoutes } from './productos.routes';

export const setupRoutes = (app: Express) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    setupProductoRoutes(app);
};