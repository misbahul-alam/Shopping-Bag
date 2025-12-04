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
} from 'drizzle-orm/pg-core';
import { categories } from './categories.schema';
import { relations } from 'drizzle-orm/relations';
import { reviews } from './reviews.schema';
import { productImages } from './product-images.schema';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  description: text('description').notNull(),
  regular_price: decimal('regular_price', {
    precision: 10,
    scale: 2,
  }).notNull(),
  salling_price: decimal('salling_price', {
    precision: 10,
    scale: 2,
  }).notNull(),
  category: integer('category')
    .references(() => categories.id)
    .notNull(),
  in_stock: boolean('in_stock').default(true).notNull(),
  is_featured: boolean('is_featured').default(false).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export const productRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.category],
    references: [categories.id],
  }),
  reviews: many(reviews),
  images: many(productImages),
}));
