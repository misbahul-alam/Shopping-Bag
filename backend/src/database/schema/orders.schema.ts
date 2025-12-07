import {
  pgTable,
  serial,
  integer,
  timestamp,
  pgEnum,
  decimal,
  varchar,
  index,
} from 'drizzle-orm/pg-core';
import { users } from './users.schema';
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
export const orders = pgTable(
  'orders',
  {
    id: serial('id').primaryKey(),
    user_id: integer('user_id')
      .references(() => users.id)
      .notNull(),
    status: orderStatusEmun('status').default('pending').notNull(),

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

    shipping_name: varchar('shipping_name', { length: 100 }).notNull(),
    shipping_phone: varchar('shipping_phone', { length: 20 }).notNull(),
    shipping_street: varchar('shipping_street', { length: 100 }).notNull(),
    shipping_city: varchar('shipping_city', { length: 50 }).notNull(),
    shipping_state: varchar('shipping_state', { length: 50 }),
    shipping_postal_code: varchar('shipping_postal_code', {
      length: 20,
    }).notNull(),
    shipping_country: varchar('shipping_country', { length: 50 }).notNull(),

    created_at: timestamp('created_at').defaultNow().notNull(),
    updated_at: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => {
    return {
      userIndex: index('orders_user_id_index').on(table.user_id),
      statusIndex: index('orders_status_index').on(table.status),
      userCreatedAtIndex: index('orders_user_created_at_index').on(
        table.user_id,
        table.created_at,
      ),
    };
  },
);

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.user_id],
    references: [users.id],
  }),

  order_items: many(orderItems),
}));
