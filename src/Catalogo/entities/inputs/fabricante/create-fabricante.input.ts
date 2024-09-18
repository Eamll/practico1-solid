import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateFabricanteInput {
    @IsOptional()
    @IsString()
    @MaxLength(50)
    sku?: string;

    @IsString()
    @MaxLength(100)
    nombre!: string;
}
