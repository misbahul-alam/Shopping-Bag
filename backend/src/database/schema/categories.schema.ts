import { relations } from 'drizzle-orm';
import { integer } from 'drizzle-orm/pg-core';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 30 }).notNull(),
  slug: varchar('slug', { length: 30 }).unique().notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  parent_id: integer('parent_id').references(() => categories.id),
});

export const categoryRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parent_id],
    references: [categories.id],
  }),
  subcategories: many(categories),
}));
