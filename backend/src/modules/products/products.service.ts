import { CloudinaryService } from './../cloudinary/cloudinary.service';
import {
  Injectable,
  Inject,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DRIZZLE } from 'src/database/database.module';
import type { DrizzleDB } from 'src/database/types/drizzle';
import { eq } from 'drizzle-orm';
import { products } from 'src/database/schema/products.schema';
import { PaginationDto } from 'src/core/dto/pagination.dto';
import { categories } from 'src/database/schema/categories.schema';
import { productImages } from 'src/database/schema/product-images.schema';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDB,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async create(
    createProductDto: CreateProductDto,
    images: Express.Multer.File[],
  ) {
    if (!images || images.length === 0) {
      throw new ConflictException('At least one product image is required');
    }
    const {
      title,
      slug,
      description,
      category_id,
      regular_price,
      selling_price,
      in_stock,
      is_featured,
    } = createProductDto;

    const exitingProduct = await this.db
      .select()
      .from(products)
      .where(eq(products.slug, slug))
      .then((res) => res[0]);

    if (exitingProduct) {
      throw new ConflictException('Product with this slug already exists');
    }

    const category = await this.db.query.categories.findFirst({
      where: eq(categories.id, category_id),
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const uploadImages = await this.cloudinaryService.uploadFiles(images);
    console.log(uploadImages);

    const [newProduct] = await this.db
      .insert(products)
      .values({
        title,
        slug,
        description,
        category_id: category.id,
        regular_price,
        selling_price,
        in_stock,
        is_featured,
      })
      .returning();

    const imageList = uploadImages.map((image) => {
      return {
        product_id: newProduct.id,
        url: image.secure_url,
      };
    });
    await this.db.insert(productImages).values(imageList);
    return { message: 'Product created successfully', data: newProduct };
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;
    const products = await this.db.query.products.findMany({
      with: {
        category: {
          columns: {
            name: true,
            slug: true,
          },
        },
        images: {
          columns: {
            url: true,
          },
        },
      },
      limit,
      offset: (page - 1) * limit,
    });
    const total = await this.db.query.products
      .findMany()
      .then((res) => res.length);
    return {
      page,
      limit,
      total,
      total_pages: Math.ceil(total / limit),
      data: products,
    };
  }

  async findOne(id: number) {
    const product = await this.db.query.products.findFirst({
      where: eq(products.id, id),
      with: {
        category: {
          columns: {
            name: true,
            slug: true,
          },
        },
        images: {
          columns: {
            url: true,
          },
        },
        reviews: true,
      },
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
