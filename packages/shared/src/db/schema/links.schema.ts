import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { commonTimestampFields } from "../db.util";

export const linksTable = pgTable("links", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  shortCode: varchar({ length: 7 }).unique().notNull(),
  originalUrl: varchar().notNull(),
  ...commonTimestampFields
});

export type LinksSelect = typeof linksTable.$inferSelect;
export type LinksInsert = typeof linksTable.$inferInsert;
