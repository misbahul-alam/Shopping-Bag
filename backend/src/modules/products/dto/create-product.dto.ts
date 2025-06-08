import { IsDecimal, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsString({ message: 'Slug must be a string' })
  @IsNotEmpty({ message: 'Slug is required' })
  slug: string;
  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
  @IsString({ message: 'Category ID must be a string' })
  @IsNotEmpty({ message: 'Category ID is required' })
  @IsUUID('all', { message: 'Category ID must be a valid UUID' })
  category_id: string;
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
}
