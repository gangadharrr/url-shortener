import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { commonTimestampFields } from "../db.util";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const linksTable = pgTable("links", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  shortCode: varchar({ length: 7 }).unique().notNull(),
  originalUrl: varchar().notNull(),
  ...commonTimestampFields
});

export type LinksSelect = InferSelectModel<typeof linksTable>;
export type LinksInsert = InferInsertModel<typeof linksTable>;