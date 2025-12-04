import { pgTable, serial, integer } from 'drizzle-orm/pg-core';
import { products } from './schema';
import { orders } from './orders.schema';
import { relations } from 'drizzle-orm';
import { decimal } from 'drizzle-orm/pg-core';

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id')
    .references(() => orders.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  product_id: integer('product_id')
    .references(() => products.id)
    .notNull(),
  quantity: integer('quantity').default(1).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
});

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.order_id],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.product_id],
    references: [products.id],
  }),
}));
