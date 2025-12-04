import { integer } from 'drizzle-orm/pg-core';
import { serial } from 'drizzle-orm/pg-core';
import { pgTable } from 'drizzle-orm/pg-core';
import { products, users } from './schema';
import { relations } from 'drizzle-orm/relations';
export const reviews = pgTable('reviews', {
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
  comment: integer('comment').notNull(),
  image: integer('image'),
});

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
