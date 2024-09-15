export class Almacen {
    private cCodAlmacen: string;
    private cNombre: string;

    public get CCodAlmacen(): string { return this.cCodAlmacen; }
    public set CCodAlmacen(value: string) { this.cCodAlmacen = value; }

    public get CNombre(): string { return this.cNombre; }
    public set CNombre(value: string) { this.cNombre = value; }

    public RegistrarAlmacen(): void { }
    public RegistrarMinimoMaximoMRPProducto(): void { }
}