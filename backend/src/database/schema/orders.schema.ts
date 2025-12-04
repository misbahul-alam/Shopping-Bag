import {
  pgTable,
  serial,
  integer,
  timestamp,
  pgEnum,
  decimal,
} from 'drizzle-orm/pg-core';
import { users } from './users.schema';
import { addresses } from './address.schema';
import { relations } from 'drizzle-orm';
import { orderItems } from './order-items.schema';

export const orderStatusEmun = pgEnum('order_status', [
  'pending',
  'paid',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
]);
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .references(() => users.id)
    .notNull(),
  status: orderStatusEmun('status').default('pending').notNull(),
  address_id: integer('address_id')
    .references(() => addresses.id)
    .notNull(),
  shipping: decimal('shipping', {
    precision: 10,
    scale: 2,
  })
    .default('0')
    .notNull(),
  discount: decimal('discount', {
    precision: 10,
    scale: 2,
  })
    .default('0')
    .notNull(),
  subtotal: decimal('subtotal', {
    precision: 10,
    scale: 2,
  }).notNull(),
  total: decimal('total', {
    precision: 10,
    scale: 2,
  }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.user_id],
    references: [users.id],
  }),
  address: one(addresses, {
    fields: [orders.address_id],
    references: [addresses.id],
  }),

  order_items: many(orderItems),
}));
