import { pgTable, varchar, serial, integer, index } from 'drizzle-orm/pg-core';
import { products } from './products.schema';
import { relations } from 'drizzle-orm';

export const productImages = pgTable(
  'product_images',
  {
    id: serial('id').primaryKey(),
    product_id: integer('product_id')
      .notNull()
      .references(() => products.id, { onDelete: 'cascade' }),
    url: varchar('url', { length: 255 }).notNull(),
  },
  (table) => {
    return {
      productIdIndex: index('product_images_product_id_idx').on(
        table.product_id,
      ),
    };
  },
);
export const productImageRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.product_id],
    references: [products.id],
  }),
}));
