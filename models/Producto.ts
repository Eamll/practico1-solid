import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Producto {
    @PrimaryColumn({ type: "uuid" })
    id: string = uuidv4();

    @Column({ nullable: true })
    sku: string;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    nombreExtranjero: string;

    @Column({ nullable: true })
    codGrupoProducto: string;

    @Column({ nullable: true })
    nombreGrupoProducto: string;

    @Column({ nullable: true })
    skuFabricante: string;

    @Column({ nullable: true })
    nmbFabricante: string;

    @Column({ nullable: true })
    nmbProveedor: string;

    @Column("float", { nullable: true })
    peso: number;

    @Column({ nullable: true })
    um: string;

    @Column("float", { nullable: true })
    precioLista: number;

    @Column({ nullable: true })
    codBarra: string;

    @Column({ nullable: true })
    skuAlternante: string;

    // You can keep the methods as they are, or implement them as needed
    public registrarGrupoProducto(): void { }
    public registrarProducto(): void { }
    public registrarProveedorProducto(): void { }
    public registrarPrecioBaseProducto(): void { }
    public registrarMinimoMaximoMRPAlmacen(): void { }
}