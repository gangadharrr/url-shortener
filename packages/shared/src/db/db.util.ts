import { timestamp } from "drizzle-orm/pg-core";
import { now } from "../utils";

export const commonTimestampFields = {
	updatedAt: timestamp('updated_at', { withTimezone: false }).$defaultFn(now).notNull(),
	createdAt: timestamp('created_at', { withTimezone: false }).$defaultFn(now).notNull(),
};