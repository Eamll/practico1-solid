export interface IRepository <T> {
    registrar(data): Promise<T>;
    listar(): Promise<T[]>;
}
