import { pgTable, varchar, serial, integer } from 'drizzle-orm/pg-core';
import { products } from './products.schema';
import { relations } from 'drizzle-orm';

export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  url: varchar('url', { length: 255 }).notNull(),
});
export const productImageRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));
