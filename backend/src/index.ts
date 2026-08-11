import { buildApp } from "./app";
import { logger, env } from "url-shortener-shared";

async function main() {
  const app = await buildApp();
  try {
    await app.listen({ port: env.PORT, host: "0.0.0.0" });
    app.log.info(`Server is running on port ${env.PORT}`);
    app.log.info(`Environment: ${env.NODE_ENV}`);
    app.log.info(`Log level: ${env.LOG_LEVEL}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main().catch((err) => {
  logger.fatal({ err }, "Failed to start agents-backend service");
  process.exit(1);
});
