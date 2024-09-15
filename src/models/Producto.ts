import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryColumn({ type: "uuid" })
    id: string = uuidv4();

    @Column("text", { nullable: true })
    sku: string;

    @Column("text")
    nombre: string;

    @Column("text", { nullable: true })
    nombreExtranjero: string;

    @Column("float", { nullable: true })
    peso: number;

    @Column("text", { nullable: true })
    unidadMedida: string;

    @Column("float", { nullable: true })
    precioLista: number;

    @Column("text", { nullable: true })
    codBarra: string;

    @Column("text", { nullable: true })
    skuAlternante: string;

    // You can keep the methods as they are, or implement them as needed
    // public registrarGrupoProducto(): void { }
    // public registrarProducto(): void { }
    // public registrarProveedorProducto(): void { }
    // public registrarPrecioBaseProducto(): void { }
    // public registrarMinimoMaximoMRPAlmacen(): void { }
}