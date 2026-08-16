import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { commonTimestampFields } from "../db.util";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const linksTable = pgTable("links", {
  shortCode: varchar({ length: 7 }).unique().primaryKey().notNull(),
  name: varchar({ length: 255 }).notNull(),
  originalUrl: varchar().notNull(),
  isDeleted: boolean().default(false).notNull(),
  ...commonTimestampFields
});

export type LinksSelect = InferSelectModel<typeof linksTable>;
export type LinksInsert = InferInsertModel<typeof linksTable>;