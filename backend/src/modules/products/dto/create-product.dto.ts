import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString({ message: 'Slug must be a string' })
  @IsNotEmpty({ message: 'Slug is required' })
  slug: string;

  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Category ID must be a number' })
  @IsNotEmpty({ message: 'Category ID is required' })
  category_id: number;

  @IsDecimal(
    { decimal_digits: '0,2' },
    { message: 'Regular price must be a decimal' },
  )
  @IsNotEmpty({ message: 'Regular price is required' })
  regular_price: string;

  @IsDecimal(
    { decimal_digits: '0,2' },
    { message: 'Selling price must be a decimal' },
  )
  @IsNotEmpty({ message: 'Selling price is required' })
  selling_price: string;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean({ message: 'In stock must be a boolean' })
  in_stock: boolean = true;

  @Type(() => Boolean)
  @IsOptional()
  @IsBoolean({ message: 'Is featured must be a boolean' })
  is_featured: boolean = false;
}
