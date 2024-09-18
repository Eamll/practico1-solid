import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { IController } from "./IController";
import { CreateProductoInput } from '../entities/inputs/producto/create-producto.input';
import { IProductoRepository } from '../repositories/IPoductoRepository';
import { IFabricanteRepository } from '../repositories/IFabricanteRepository';


export class ProductoController implements IController {
    private productoRepository: IProductoRepository;
    private fabricanteRepository: IFabricanteRepository;

    constructor(productoRepository: IProductoRepository, fabricanteRepository: IFabricanteRepository) {
        this.productoRepository = productoRepository;
        this.fabricanteRepository = fabricanteRepository;
    }

    async index(req: Request, res: Response): Promise<void> {
        const productos = await this.productoRepository.listar();
        res.render('producto/index', { productos });
    }

    async create(req: Request, res: Response): Promise<void> {
        const fabricantes = await this.fabricanteRepository.listar();
        res.render('producto/form', { fabricantes })
    }

    async store(req: Request, res: Response): Promise<void> {
        try {
            const input = plainToClass(CreateProductoInput, req.body);
            const errors = await validate(input);
            await this.productoRepository.registrar(input);
            res.redirect('/productos');
        } catch (error) {
            res.status(400).send('Error al crear producto.');
        }
    }
}