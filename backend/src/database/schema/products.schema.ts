import {
  pgTable,
  serial,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  decimal,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { categories } from './categories.schema';
import { relations } from 'drizzle-orm/relations';
import { reviews } from './reviews.schema';
import { productImages } from './product-images.schema';

export const products = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 100 }).notNull(),
    slug: varchar('slug', { length: 100 }).unique().notNull(),
    description: text('description').notNull(),
    regular_price: decimal('regular_price', {
      precision: 10,
      scale: 2,
    }).notNull(),
    selling_price: decimal('selling_price', {
      precision: 10,
      scale: 2,
    }).notNull(),
    category_id: integer('category_id')
      .references(() => categories.id)
      .notNull(),
    in_stock: boolean('in_stock').default(true).notNull(),
    is_featured: boolean('is_featured').default(false).notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => {
    return {
      slugIndex: uniqueIndex('products_slug_index').on(table.slug),
      categoryIndex: index('products_category_id_index').on(table.category_id),
      featuredIndex: index('products_is_featured_index').on(table.is_featured),
    };
  },
);

export const productRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.category_id],
    references: [categories.id],
  }),
  reviews: many(reviews),
  images: many(productImages),
}));
