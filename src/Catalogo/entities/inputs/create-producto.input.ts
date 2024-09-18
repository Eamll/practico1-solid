import { IsString, IsNumber, IsOptional, Min, MaxLength, IsNumberString } from 'class-validator';

export class CreateProductoInput {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    sku?: string;

    @IsString()
    @MaxLength(100)
    nombre!: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    nombreExtranjero?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    codGrupoProducto?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    nombreGrupoProducto?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    skuFabricante?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    nmbFabricante?: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    nmbProveedor?: string;

    @IsOptional()
    @IsNumberString()
    peso?: number;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    um?: string;

    @IsOptional()
    @IsNumberString()
    precioLista?: number;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    codBarra?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    skuAlternante?: string;
}