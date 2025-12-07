import { pgTable, serial, integer, index } from 'drizzle-orm/pg-core';
import { products } from './products.schema';
import { users } from './users.schema';
import { relations } from 'drizzle-orm';

export const cartItems = pgTable(
  'cart_items',
  {
    id: serial('id').primaryKey(),
    product_id: integer('product_id')
      .references(() => products.id)
      .notNull(),
    user_id: integer('user_id')
      .references(() => users.id)
      .notNull(),
    quantity: integer('quantity').default(1).notNull(),
  },
  (table) => {
    return {
      userProductIndex: index('cart_items_user_product_index').on(
        table.user_id,
        table.product_id,
      ),
    };
  },
);

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
