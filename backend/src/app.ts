import fastify, { FastifyInstance } from "fastify";
import { loggerConfig } from "url-shortener-shared";
import { registerRoutes } from "./app-router";

export async function buildApp(): Promise<FastifyInstance> {
  const app = fastify({
    logger: loggerConfig,
  });
  registerRoutes(app);
  return app;
}

export default buildApp;
