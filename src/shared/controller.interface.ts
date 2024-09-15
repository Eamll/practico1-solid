import { Request, Response } from 'express';

export interface ICrudController<T> {
    create(req: Request, res: Response): Promise<void>;
    readAll(req: Request, res: Response): Promise<void>;
    readOne(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}