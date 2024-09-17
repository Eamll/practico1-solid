import { Request, Response } from 'express';
import { CreateProductoInput } from '../entities/inputs/create-producto.input';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IProductoController } from '../interfaces/controllers/IProducto.controller.interface';
import { ProductoService } from '../services/producto.service';

export class ProductoController implements IProductoController {
    private productoService: ProductoService;
    constructor(productoService: ProductoService) {
        this.productoService = productoService;
    }
    async create(req: Request, res: Response): Promise<void> {
        try {
            const input = plainToClass(CreateProductoInput, req.body);
            const errors = await validate(input);

            if (errors.length > 0) {
                res.status(400).json({ message: "Validation failed", errors });
                return;
            }

            const result = await this.productoService.create(input);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error creating product", error });
        }
    }

    async readAll(req: Request, res: Response): Promise<void> {
        try {
            const productos = await this.productoService.readAll();
            res.json(productos);
        } catch (error) {
            res.status(500).json({ message: "Error fetching products", error });
        }
    }

    async readOne(req: Request, res: Response): Promise<void> {
        try {
            const producto = await this.productoService.readOne(req.params.id);
            if (!producto) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            res.json(producto);
        } catch (error) {
            res.status(500).json({ message: "Error fetching product", error });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.productoService.update(req.params.id, req.body);
            if (!result) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error updating product", error });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const success = await this.productoService.delete(req.params.id);
            if (!success) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting product", error });
        }
    }
};