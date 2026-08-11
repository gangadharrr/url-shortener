import { FastifyInstance } from "fastify";
import * as PublicRoutes from "./routes/public";
import * as PrivateRoutes from "./routes/private";
import { Endpoints } from "./configs/endpoints.config";

export function registerPrivateRoutes(app: FastifyInstance) {
  for (const route of Object.values(PrivateRoutes)) {
    app.register(route, { prefix: Endpoints.PrivateRoutePrefix });
  }
}
export function registerPublicRoutes(app: FastifyInstance) {
  for (const route of Object.values(PublicRoutes)) {
    app.register(route, { prefix: Endpoints.PublicRoutePrefix });
  }
}

export function registerRoutes(app: FastifyInstance) {
  registerPublicRoutes(app);
  registerPrivateRoutes(app);
}
