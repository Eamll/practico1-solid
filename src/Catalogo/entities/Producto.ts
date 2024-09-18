import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";

import { GrupoProducto } from './GrupoProducto';
import { Fabricante } from './Fabricante';
import { Proveedor } from './Proveedor';

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

    @ManyToOne(() => GrupoProducto, grupoProducto => grupoProducto.productos)
    grupoProducto: GrupoProducto;

    @ManyToOne(() => Fabricante, fabricante => fabricante.productos)
    fabricante: Fabricante

    @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
    proveedor: Proveedor
}
