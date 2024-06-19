import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const contactRequest = sqliteTable('contactRequest', {
  email: text('email').notNull(),
  subject: text('subject'),
  message: text('message').notNull(),
});