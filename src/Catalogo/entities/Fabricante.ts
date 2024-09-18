import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Producto } from './Producto';

@Entity()
export class Fabricante {
    @PrimaryColumn("text")
    sku: string;
    @Column("text", { nullable: true })
    nombre: string;

    @OneToMany(() => Producto, producto => producto.proveedor)
    productos: Producto[]

    constructor(sku: string, nombre: string) {
        this.sku = sku;
        this.nombre = nombre;
    }
}
