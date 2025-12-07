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
import { uniqueIndex } from 'drizzle-orm/pg-core';
import { index } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['admin', 'user']);

export const users = pgTable(
  'users',
  {
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
  },
  (table) => {
    return {
      emailIndex: uniqueIndex('users_email_index').on(table.email),
      roleIndex: index('users_role_index').on(table.role),
    };
  },
);

export const userRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
  orders: many(orders),
  cartItems: many(cartItems),
}));
