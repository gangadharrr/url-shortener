import { env } from "./env.config";

export const loggerConfig = {
  // Local development only: pretty-printed logs with colors
  level: env.LOG_LEVEL,
  transport: {
    targets: [
      {
        target: "pino-pretty",
        level: env.LOG_LEVEL,
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      },
      {
        target: "pino/file",
        level: "info",
        options: {
          destination: "./logs/app.log",
          mkdir: true,
        },
      },
    ],
  },
};
