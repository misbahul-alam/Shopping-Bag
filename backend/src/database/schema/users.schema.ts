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
import { carts } from './carts.schema';

export const roleEnum = pgEnum('role', ['admin', 'user']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  first_name: varchar('first_name').notNull(),
  last_name: varchar('last_name').notNull(),
  email: varchar('email').notNull().unique(),
  is_verified: boolean('is_verified').default(false).notNull(),
  role: roleEnum('role').default('user').notNull(),
  password: varchar('password').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
  orders: many(orders),
  carts: many(carts),
}));
