import { timestamp } from "drizzle-orm/pg-core";
import { now } from "../utils";
import { db } from ".";

export const commonTimestampFields = {
	updatedAt: timestamp('updated_at', { withTimezone: false }).$defaultFn(now).notNull(),
	createdAt: timestamp('created_at', { withTimezone: false }).$defaultFn(now).notNull(),
};

export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0];