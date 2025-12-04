import { pgTable, serial, integer } from 'drizzle-orm/pg-core';
import { products } from './products.schema';
import { users } from './users.schema';
import { relations } from 'drizzle-orm';

export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  product_id: integer('product_id')
    .references(() => products.id)
    .notNull(),
  user_id: integer('user_id')
    .references(() => users.id)
    .notNull(),
  quantity: integer('quantity').default(1).notNull(),
});

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  product: one(products, {
    fields: [cartItems.product_id],
    references: [products.id],
  }),
  user: one(users, {
    fields: [cartItems.user_id],
    references: [users.id],
  }),
}));
