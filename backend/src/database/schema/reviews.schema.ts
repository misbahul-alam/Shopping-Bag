import {
  pgTable,
  text,
  serial,
  integer,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { products, users } from './schema';
import { relations } from 'drizzle-orm/relations';
import { varchar } from 'drizzle-orm/pg-core';
export const reviews = pgTable(
  'reviews',
  {
    id: serial('id').primaryKey(),
    user_id: integer('user_id')
      .references(() => users.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    product_id: integer('product_id')
      .references(() => products.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    rating: integer('rating').notNull(),
    comment: text('comment').notNull(),
    image: varchar('image', { length: 255 }),
  },
  (table) => {
    return {
      userProductIndex: uniqueIndex('reviews_user_product_index').on(
        table.user_id,
        table.product_id,
      ),
      productIndex: index('reviews_product_index').on(table.product_id),
      userIndex: index('reviews_user_index').on(table.user_id),
    };
  },
);

export const reviewRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.user_id],
    references: [users.id],
  }),
  product: one(products, {
    fields: [reviews.product_id],
    references: [products.id],
  }),
}));
