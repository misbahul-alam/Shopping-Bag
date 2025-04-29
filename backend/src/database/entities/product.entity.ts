import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { ProductImage } from './product-image.entity';
import { OrderItem } from './order-item.entity';
import { Cart } from './cart.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImage[];

  @OneToMany(() => Cart, (cart) => cart.product)
  carts: Cart[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  original_price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discounted_price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orders: OrderItem[];

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
