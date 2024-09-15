// controllers/productoController.ts

import { Request, Response } from 'express';
import { Producto } from '../models/Producto';
import { AppDataSource } from '../db/AppDataSource';

const productoRepository = AppDataSource.getRepository(Producto);

export const createProducto = async (req: Request, res: Response) => {
    try {
        const producto = productoRepository.create(req.body);
        const result = await productoRepository.save(producto);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};

export const getAllProductos = async (req: Request, res: Response) => {
    try {
        const productos = await productoRepository.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

export const getProductoById = async (req: Request, res: Response) => {
    try {
        const producto = await productoRepository.findOne({ where: { id: req.params.id } });
        if (!producto) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

export const updateProducto = async (req: Request, res: Response) => {
    try {
        const producto = await productoRepository.findOne({ where: { id: req.params.id } });
        if (!producto) {
            return res.status(404).json({ message: "Product not found" });
        }
        productoRepository.merge(producto, req.body);
        const result = await productoRepository.save(producto);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

export const deleteProducto = async (req: Request, res: Response) => {
    try {
        const producto = await productoRepository.findOne({ where: { id: req.params.id } });
        if (!producto) {
            return res.status(404).json({ message: "Product not found" });
        }
        await productoRepository.remove(producto);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};