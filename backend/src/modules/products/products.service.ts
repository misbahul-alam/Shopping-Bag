import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DRIZZLE } from 'src/database/database.module';
import type { DrizzleDB } from 'src/database/types/drizzle';
import { eq } from 'drizzle-orm';
import { products } from 'src/database/schema/products.schema';
@Injectable()
export class ProductsService {
  constructor(@Inject(DRIZZLE) private readonly db: DrizzleDB) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    const products = await this.db.query.products.findMany({
      with: {
        category: true,
        images: true,
        reviews: true,
      },
    });
    return products;
  }

  async findOne(id: number) {
    const product = await this.db.query.products.findFirst({
      where: eq(products.id, id),
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const result = await this.db.delete(products).where(eq(products.id, id));
    if (result.rowCount === 0) {
      throw new NotFoundException('Product not found');
    }
    return { message: 'Product deleted successfully', id };
  }
}
