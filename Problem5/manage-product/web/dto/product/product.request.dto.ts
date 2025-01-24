import { IsString, IsNumber, IsOptional, Min, IsPositive } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateProductDto {
  name!: string;
  description!: string;
  price!: number;

  @IsString()
  category!: string;
}

export class UpdateProductDto extends CreateProductDto { }

export class ProductQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  limit?: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @IsOptional()
  @IsString()
  search?: string;
} 