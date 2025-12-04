import {
  pgTable,
  serial,
  varchar,
  timestamp,
  pgEnum,
  boolean,
} from 'drizzle-orm/pg-core';
import { orders, reviews } from './schema';
import { relations } from 'drizzle-orm/relations';
import { cartItems } from './carts_items.schema';

export const roleEnum = pgEnum('role', ['admin', 'user']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  first_name: varchar('first_name', { length: 30 }).notNull(),
  last_name: varchar('last_name', { length: 30 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  is_verified: boolean('is_verified').default(false).notNull(),
  role: roleEnum('role').default('user').notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
  orders: many(orders),
  cartItems: many(cartItems),
}));
