import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';
import { orders } from './orders.schema';
import { relations } from 'drizzle-orm/relations';

export const addresses = pgTable('addresses', {
  id: serial('id').primaryKey(),
  street: varchar('street', { length: 100 }).notNull(),
  city: varchar('city', { length: 50 }).notNull(),
  state: varchar('state', { length: 50 }).notNull(),
  postal_code: varchar('postal_code', { length: 20 }).notNull(),
  country: varchar('country', { length: 50 }).notNull(),
  order_id: integer('order_id')
    .references(() => orders.id)
    .notNull(),
});

export const addressRelations = relations(addresses, ({ one }) => ({
  order: one(orders, {
    fields: [addresses.order_id],
    references: [orders.id],
  }),
}));
