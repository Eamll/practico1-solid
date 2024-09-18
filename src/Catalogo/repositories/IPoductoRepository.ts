import { Producto } from "../entities/Producto";
import { IRepository } from "./IRepository";

export interface IProductoRepository extends IRepository <Producto> {}
