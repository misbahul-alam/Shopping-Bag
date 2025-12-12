import { CloudinaryService } from './../cloudinary/cloudinary.service';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DRIZZLE } from 'src/database/database.module';
import type { DrizzleDB } from 'src/database/types/drizzle';
import { eq } from 'drizzle-orm';
import { categories } from 'src/database/schema/categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDB,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async create(
    createCategoryDto: CreateCategoryDto,
    image: Express.Multer.File,
  ) {
    const uploadImage = await this.cloudinaryService.uploadFile(image);
    const { name, slug } = createCategoryDto;
    const category = await this.db.query.categories.findFirst({
      where: eq(categories.slug, slug),
    });

    if (category) {
      throw new ConflictException('Category with this slug already exists');
    }
    const newCategory = await this.db.insert(categories).values([
      {
        name,
        slug,
        image: uploadImage.secure_url,
      },
    ]);
    return {
      message: 'Category created successfully',
      category: newCategory[0],
    };
  }

  async findAll() {
    const categories = await this.db.query.categories.findMany();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.db.query.categories.findFirst({
      where: eq(categories.id, id),
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
