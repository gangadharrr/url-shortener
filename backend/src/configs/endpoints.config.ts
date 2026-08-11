import { env } from "url-shortener-shared";

export const Endpoints = {
  get PublicRoutePrefix() {
    return `${env.SERVICE_ROUTE_PREFIX}`;
  },
  get PrivateRoutePrefix() {
    return `${env.SERVICE_ROUTE_PREFIX}/api/${env.VERSION}`;
  },
  Public: {
    HEALTH: "/health",
  },
  Internal: {},
  Private: {
    HEALTH: "/health",
  },
} as const;
