import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class GrupoProducto {
    @PrimaryColumn("text")
    codigo: string;
    @Column("text", { nullable: true })
    nombre: string;

    @OneToMany(() => Producto, producto => producto.proveedor)
    productos: Producto[]

    constructor(codigo: string, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
}
