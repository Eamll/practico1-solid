import { Request, Response } from 'express';

export interface IController {
    index(req: Request, res:Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    store(req: Request, res: Response): Promise<void>;
}