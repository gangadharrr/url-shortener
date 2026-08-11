import { FastifyInstance } from "fastify";
import { env } from "url-shortener-shared";
import { Endpoints } from "../../configs";

export const registerHealthRoutes = (app: FastifyInstance) => {
  app.route({
    method: "GET",
    url: Endpoints.Public.HEALTH,
    handler: async (_request, _reply) => {
      return {
        status: "OK",
        date: new Date().toISOString(),
        environment: env.NODE_ENV,
        protected: false,
      };
    },
  });
};