export class Producto {
    private sku: string;
    private nombre: string;
    private nombreExtranjero: string;
    private codGrupoProducto: string;
    private nombreGrupoProducto: string;
    private skuFabricante: string;
    private nmbFabricante: string;
    private nmbProveedor: string;
    private peso: number;
    private um: string;
    private precioLista: number;
    private codBarra: string;
    private skuAlternante: string;

    public get getSku(): string { return this.sku; }
    public set setSku(value: string) { this.sku = value; }

    public get getNombre(): string { return this.nombre; }
    public set setNombre(value: string) { this.nombre = value; }

    public get getSkuFabricante(): string { return this.skuFabricante; }
    public set setSkuFabricante(value: string) { this.skuFabricante = value; }

    public get getNmbFabricante(): string { return this.nmbFabricante; }
    public set setNmbFabricante(value: string) { this.nmbFabricante = value; }

    public get getNmbProveedor(): string { return this.nmbProveedor; }
    public set setNmbProveedor(value: string) { this.nmbProveedor = value; }

    public get getPeso(): number { return this.peso; }
    public set setPeso(value: number) { this.peso = value; }

    public get getUm(): string { return this.um; }
    public set setUm(value: string) { this.um = value; }

    public get getPrecioLista(): number { return this.precioLista; }
    public set setPrecioLista(value: number) { this.precioLista = value; }

    public get getCodBarra(): string { return this.codBarra; }
    public set setCodBarra(value: string) { this.codBarra = value; }

    public get getSkuAlternante(): string { return this.skuAlternante; }
    public set setSkuAlternante(value: string) { this.skuAlternante = value; }


    public registrarGrupoProduco(): void { }
    public registrarProducto(): void { }
    public registrarProveedorProducto(): void { }
    public registrarPrecioBaseProducto(): void { }
    public registrarMinimoMaximoMRPAlmacen(): void { }
}