import z from "zod/v4";

export const envConfig = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),
  SERVICE_ROUTE_PREFIX: z.string().describe("Service route prefix before API routes \`/service-name\`").default('/link'),
  VERSION: z.string().default('v1'),
})

export const env = envConfig.parse(process.env);