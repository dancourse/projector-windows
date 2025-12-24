import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const favourites = pgTable('favourites', {
  id: serial('id').primaryKey(),
  videoId: varchar('video_id', { length: 20 }).notNull().unique(),
  title: text('title'),
  thumbnail: text('thumbnail'),
  channel: text('channel'),
  addedAt: timestamp('added_at').defaultNow(),
});

export const themes = pgTable('themes', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  searchQuery: varchar('search_query', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Favourite = typeof favourites.$inferSelect;
export type NewFavourite = typeof favourites.$inferInsert;
export type Theme = typeof themes.$inferSelect;
export type NewTheme = typeof themes.$inferInsert;
