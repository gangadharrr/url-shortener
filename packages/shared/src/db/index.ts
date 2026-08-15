import { Pool } from 'pg';
import { env } from "../configs";
import { logger } from "../services";
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

const postgresClient = new Pool({
	host: env.DB_HOST,
	port: Number(env.DB_PORT),
	database: env.DB_NAME,
	user: env.DB_USER,
	password: env.DB_PASSWORD,
	max: 50,
idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 10000,
	ssl: env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});
postgresClient.on<'error'>('error', (err: Error) => {
	logger.error(`Unexpected error on idle Postgres pool client: ${err.cause}`);
});

export * from './schema';
export * from './db.util';
export const db = drizzle({ client: postgresClient, schema: { ...schema } });
