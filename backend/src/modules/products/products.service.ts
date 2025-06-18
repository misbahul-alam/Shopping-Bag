import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Category } from 'src/database/entities/category.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { CloudinaryService } from 'src/shared/cloudinary/cloudinary.service';
import { ProductImage } from 'src/database/entities/product-image.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async addProduct(
    createProductDto: CreateProductDto,
    images: Express.Multer.File[],
  ) {
    const {
      name,
      slug,
      description,
      category_id,
      regular_price,
      selling_price,
    } = createProductDto;

    if (!images || images.length === 0) {
      throw new BadRequestException('Image not provided');
    }

    const product = await this.productRepository.findOne({ where: { slug } });
    if (product) {
      throw new ConflictException(`Product with slug ${slug} already exists`);
    }

    const category = await this.categoryRepository.findOne({
      where: { id: category_id },
    });

    if (!category) {
      throw new NotFoundException(`Category with id ${category_id} not found`);
    }

    const newProduct = this.entityManager.create(Product, {
      name,
      slug,
      description,
      category_id,
      regular_price: parseFloat(regular_price),
      selling_price: parseFloat(selling_price),
      category,
    });

    if (!newProduct) {
      throw new BadRequestException('Product creation failed');
    }

    const imageUrls = await Promise.all(
      images.map((image) => this.cloudinaryService.uploadFile(image)),
    );
    const savedProduct = await this.entityManager.save(newProduct);
    const imageList: { url: string; product: Product }[] = [];
    imageUrls.forEach((image) => {
      imageList.push({ url: image.secure_url, product: savedProduct });
    });

    const newImages = this.entityManager.create(ProductImage, imageList);

    await this.entityManager.save(newImages);
    if (!savedProduct) {
      throw new BadRequestException('Product creation failed');
    }

    return { ...savedProduct, message: 'Product added sucessfully!' };
  }

  async findAllProduct(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const products = await this.productRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    const totalProducts = await this.productRepository.count();
    return {
      page,
      limit,
      total: totalProducts,
      total_page: Math.ceil(totalProducts / limit),
      data: products,
    };
  }

  async findById(id: string) {
    const product = await this.productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  async findBySlug(slug: string) {
    if (!slug) {
      throw new BadRequestException('Slug is required');
    }
    const product = await this.productRepository.findOneBy({ slug });
    console.log('product', product);

    if (!product) {
      throw new NotFoundException(`Product not found`);
    }
    return product;
  }

  updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async deleteProduct(id: string) {
    const deletedProduct = await this.productRepository.delete({ id });
    if (!deletedProduct) {
      throw new BadRequestException(`Product with id ${id} deletion failed`);
    }
    if (deletedProduct.affected === 0) {
      throw new BadRequestException(`Product with id ${id} deletion failed`);
    }
    if (deletedProduct.affected === 1) {
      return `Product with id ${id} deleted successfully`;
    }

    return `This action removes a #${id} product`;
  }
}
